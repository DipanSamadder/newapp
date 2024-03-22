import * as React from 'react';
import Button from 'react-bootstrap/Button';

function Button() {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>Change this and that and try again.</p>
      <Button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </Button>
    </div>
  );
}

export default Button;