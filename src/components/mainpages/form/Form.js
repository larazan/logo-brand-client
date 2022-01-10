import React, { useState } from 'react';
import './form.css';

import TagsInput from '../../tagsInput';

const Form = () => {
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});

  const changeHandler = (name, value) => {
    if(name === 'tags') {
      setTags(value);
      if(value.length > 0 && errors.tags) {
        setErrors(prev => {
          const prevErrors = {...prev};
          delete prevErrors.tags;
          return prevErrors;
        });
      }
    }
  }

  const submitHandler = e => {
    e.preventDefault();

    if(tags.length === 0) {
      setErrors(prev => ({
        ...prev,
        tags: 'Please add at least one tag'
      }));
    }

    if(tags.length > 0) {
      console.log(tags);
      // Submit form
    }
  }

  return (
    <div>
      <header className="header">
        <h1>Tags input with react js</h1>
      </header>
      <form onSubmit={submitHandler}>
        <TagsInput 
          label="Tags"
          id="tags"
          name="tags"
          placeholder="Add tag"
          onChange={changeHandler}
          error={errors.tags}
          defaultTags={tags}
        />
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;