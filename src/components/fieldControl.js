const fieldControl = (() => {
  function editField(e) {
    const fieldName = e.target.getAttribute('data-for');
    this.setState({
      [fieldName]: {
        placeholder: this.state[fieldName].placeholder,
        text: this.state[fieldName].text,
        edit: true
      }
    })
  }

  function handleChange(e) {
    const fieldName = e.target.getAttribute('data-for');
    this.setState({
      [fieldName]: {
        placeholder: this.state[fieldName].placeholder,
        text: e.target.value,
        edit: true
      }
    })
  }

  function confirmField(e) {
    const fieldName = e.target.getAttribute('data-for');
    this.setState({
      [fieldName]: {
        placeholder: this.state[fieldName].placeholder,
        text: this.state[fieldName].text,
        edit: false
      }
    })
  }

  return { editField, handleChange, confirmField }
})();

export default fieldControl;
