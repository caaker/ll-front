
  // {this.props.Modal.data ? <button className="butn butn3">Update</button> : <button className="butn butn3">Add</button>}

  // submitFormPUT = (event) => {
  //   event.preventDefault();
  //   const valid_status = validate(this);
  //   if (valid_status !== true) {
  //     alert(valid_status);
  //     return;
  //   }
  //   let _id = encodeURIComponent(this.state._id);
  //   const options = { 
  //     headers: {'Content-Type': 'application/json'}, 
  //     method: 'PUT', 
  //     body: JSON.stringify(this.state)
  //   };
  //   fetch("/articles/put/" + _id, options )
  //     .then((response) => {
  //       console.log("DEBUG: fetch/PUT success: ", _id)
  //     })
  //     .catch((error) => {
  //       console.log('fetch/PUT error', error);
  //     });
  //   this.closeModal();
  // }



/*

Rabit hole, delete in 2022

  componentDidUpdate(prevProps) {
    console.log("DEBUG: componenetDidUpdate() called, props or state changed:")
    if ((this.props.Modal.data !== prevProps.Modal.data) && this.props.Modal.data) {
      this.url.updateURL(this.props.Modal.data.link);
      this.img_url.updateURL(this.props.Modal.data.image);
      this.setState(this.props.Modal.data);
      this.setState({
        domain: this.url.obj.domain
      }); 
    }
  }


  console.log("DEBUG: updateForm(), event.target.value ", event.target.value);
  console.log("DEBUG: fetch/POST success: ");
  console.log(response);

*/