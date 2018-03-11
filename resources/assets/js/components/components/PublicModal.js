import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CardImage } from 'mdbreact';
import Comment from './Comment';
import { List } from 'material-ui/List';
import '../index.css';
export default class UserModal extends React.Component {
  render() {
    const mappedComments = this.props.complaint.comments.map(
      (comment, i, arr) => <Comment key={comment.id} data={comment} />
    );
    return (
      <Modal show={this.props.showmodal} onHide={this.props.closemodal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.complaint.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          {/* change the src of the picture for each complaint based on complaint */}
          object.
          <CardImage
            className="img-fluid Modalimage"
             src={"/images/"+this.props.complaint.image_path}
          />
          <br />
          <p>{this.props.complaint.description}</p>
          <br />
          <List>{mappedComments}</List>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closemodal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
