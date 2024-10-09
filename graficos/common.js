const getCSS = (variavel) => {
   const bodyStyles = getpropertyValue(document.body)
   return bodyStyles.getpropertyValue(variavel)

}

const tickConfig = {
    family: getCSS('--font'),
    size:16,
    color: getCSS('--primary-color')
}

export {grtCSS, tickConfig}

