$.modal = function (options) {
    function _createModal(options) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-box">
                    <div class="modal__header">
                        <span class="modal__title">Modal title</span>
                        <span class="modal__close">&times;</span>
                    </div>
                    <div class="modal__body">
                        Its modal
                    </div>
                    <div class="modal__footer">
                        <button>OK</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        `);
        document.body.appendChild(modal);
        return modal;
    }
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let closing = false;
    console.log(!closing === true)

    return {
        open() {            
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout( () => {
                $modal.classList.remove('hide');
                closing = false;
            },  ANIMATION_SPEED);
        },
        destroy() {},
    };
};