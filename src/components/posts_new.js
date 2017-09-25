import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  renderPostField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="textarea"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderPostField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.title = "Enter some !";
  }
  if (!values.content) {
    errors.title = "Enter a title!";
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
