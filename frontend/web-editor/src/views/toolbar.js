const html = require('choo/html')

module.exports = function toolbar(state, emit) {
    const hidden = state.showInfo ? 'hidden' : ''

    const { t } = state.translation

    const dispatch = (eventName) => (e) => emit(eventName, e)

    const icon = (id, className, title, event) => html`
        <i id="${id}-icon" class="fas icon ${className}" title="${title}" onclick=${dispatch(event)} aria-hidden="true"></i>`

    const toggleInfo = state.showInfo ? icon("close", "fa-times", t('toolbar.hide-info'), 'toggle info') : icon("close", "fa-question-circle", t('toolbar.show-info'), 'toggle info')  
    return html`<div>
        ${icon("run", `fa-play-circle ${hidden}`, t('toolbar.run'), 'editor:evalAll')}
        ${toggleInfo}
    </div>`
}