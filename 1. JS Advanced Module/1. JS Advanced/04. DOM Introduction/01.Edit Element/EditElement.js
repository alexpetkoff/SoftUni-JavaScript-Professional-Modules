function editElement(ref, match, replacer) {
    
    let content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    let changedText = content.replace(matcher, replacer);
    ref.textContent = changedText;

}