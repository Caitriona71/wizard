const topLeft = document.getquerySelector('.top-left-pad');
const topRight = document.getquerySelector('.top-right-pad');
const bottomLeft = document.getquerySelector('.bottom-left-pad');
const bottomRight = document.getquerySelector('.bottom-right-pad');

const sequence = [
    topLeft,
    bottomRight,
    bottomLeft,
    topRight
];

const flash = pad => {
    return new Promise((resolve, reject) => {
        pad.className += ' active';
        setTimeout(() => {
            pad.className = pad.className.replace(
                ' active',
                ''
            );
            resolve();
        }, 1000);
        });
    };

    const main = async () => {
        for (const pad of sequence) {
        await flash(pad);
        }
    };
