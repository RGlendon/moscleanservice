import React, { Component } from 'react'
import Manager from './PopupboxManager'
import merge from 'deepmerge'
import closePopup from "./../../../assets/closeMenu.svg";

export class PopupboxContainer extends Component {
  constructor(props) {
    super(props)

    this._defaultState = this.getConfig({ params: props, isInit: true })
    this.state = this._defaultState
    Manager.setDefault(this._defaultState)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.closeImagebox = Manager.close.bind(Manager)
  }

  getConfig({ params, isInit }) {
    const defaultConfig = {
      overlayOpacity: 0.75,
      show: false,
      fadeIn: false,
      fadeInSpeed: 500,
      fadeOut: true,
      fadeOutSpeed: 500,
      overlayClose: true,
      escClose: true,
      closeBtn: true,
      padding: true,
      content: {}
    }

    if (isInit && !params) return defaultConfig

    return merge(isInit ? defaultConfig : this._defaultState, params)
  }

  onKeyDown(e) {
    if (!this.state.escClose) return
    if (this.state.show && (e.keyCode === 27)) {
      this.closeImagebox()
    }
  }

  // componentWillMount() {
  //   Manager.addChangeListener(this.handleStoreChange)
  // }

  componentDidMount() {
    Manager.addChangeListener(this.handleStoreChange);

    document.addEventListener('keydown', this.onKeyDown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this))
    Manager.removeChangeListener(this.handleStoreChange)
  }

  handleStoreChange(params) {
    this.cleanUp()

    const { children, show, config } = params
    const currentConfig = this.getConfig({ params: config, isInit: false })
    const { fadeIn, fadeInSpeed, fadeOut, fadeOutSpeed } = currentConfig

    if (show) {
      const { onComplete, onOpen } = currentConfig
      this.setState(merge(currentConfig, {
        children: children,
        show: true,
        transition: (fadeIn) ? `all ${fadeInSpeed / 1000}s ease-in-out` : 'none',
        callback: setTimeout(() => {
          onComplete && onComplete()
        }, fadeInSpeed + 1)
      }))
      onOpen && onOpen()
    } else {
      const { onCleanUp } = currentConfig
      onCleanUp && onCleanUp()
      this.setState({
        show: false,
        transition: (fadeOut) ? `all ${fadeOutSpeed / 1000}s ease-in-out` : 'none',
        callback: setTimeout(() => {
          this.onClosed()
        }, fadeOutSpeed + 1)
      })
    }
  }

  onClosed() {
    const { onClosed } = this.state
    onClosed && onClosed()
    this.setState(this._defaultState)
  }

  cleanUp() {
    clearTimeout(this.state.callback)
  }

  render() {
    const {
      overlayOpacity,
      show,
      children,
      style,

      closeBtn,
      padding,
      content
    } = this.state


    return (
      <div
        style={{ transition: this.state.transition }}
        className={`popupbox${show ? ' is-active': ''}`}
      >
        <div
          className={`popupbox-wrapper`}
          style={style ? style : undefined}
        >
          {closeBtn &&
          <img className={`popupbox-btn--close`}
               src={closePopup} alt="закрыть" onClick={this.closeImagebox}/>}
          <div
            className={`popupbox-content  ${!padding ? 'popupbox-content_withoutPadding' : ''}`}
            style={content.style ? content.style : undefined}
          >
            { children }
          </div>
        </div>
        <div
          className="popupbox-overlay"
          style={{ opacity: overlayOpacity }}
          // style={{ opacity: 0.5 }}
          onClick={this.state.overlayClose ? this.closeImagebox : undefined}
        />
      </div>
    )
  }
}
