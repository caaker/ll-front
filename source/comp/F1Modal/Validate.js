

const validate = (data) => {
  
  if(!data.url.obj.valid) {
    return 'url not valid';
  }

  if(!data.img_url.obj.valid) {
    return 'image not valid';
  }

  if(data.state.title === "") {
    return 'title not valid';
  }

  if(data.state.summary === "") {
    return 'summary not valid';
  }

  if(data.state.tag === "") {
    return 'tag not valid';
  }

  return true;
  
}

export default validate;