let id = 0;

export function createDado(initialFace = 1) {
    return `
    <div class="contenedor-dado">
        <div id="dado-${++id}" class="dado dado--cara-${initialFace}">
            <div class="dado__cara dado__cara--1"><span></span></div>
            <div class="dado__cara dado__cara--2">
                <span></span><span></span>
            </div>
            <div class="dado__cara dado__cara--3">
                <span></span><span></span><span></span>
            </div>
            <div class="dado__cara dado__cara--4">
                <span></span><span></span><span></span><span></span>
            </div>
            <div class="dado__cara dado__cara--5">
                <span></span><span></span><span></span><span></span
                ><span></span>
            </div>
            <div class="dado__cara dado__cara--6">
                <span></span><span></span><span></span><span></span
                ><span></span><span></span>
            </div>
        </div>
    </div>`;
}
