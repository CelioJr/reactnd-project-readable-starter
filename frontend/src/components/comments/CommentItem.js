import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownIcon from '@material-ui/icons/ThumbDownAltOutlined'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

import { voteComment } from '../../actions/comments'

const styles = {
  labelIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  cardAction: {
    justifyContent: 'flex-end',
    padding: 0
  },
  boxCount: {
    display: 'flex',
    padding: 0
  }
}

class CommentItem extends Component {
  render() {
    const { comment } = this.props

    return (
      <Grid key={comment.id} item xs={12} style={{ marginTop: '2%' }}>
        <Paper style={{ paddingLeft: '2%' }} >
          <Grid item xs={12}>
            <Typography gutterBottom variant="headline" component="h6">
              {comment.author}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom component="p">
              {comment.body}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={styles.boxCount}>
              <Typography variant="subtitle2" style={styles.labelIcon} component="p">
                {comment.voteScore}
              </Typography>
              <IconButton
                onClick={() => this.props.voteComment(comment.id, comment.parentId, 'upVote')}>
                <ThumbUpIcon />
              </IconButton>
              <IconButton
                onClick={() => this.props.voteComment(comment.id, comment.parentId, 'downVote')}>
                <ThumbDownIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item container spacing={8} direction="row">
            <Grid item style={{ margin: '2%' }} >
              <Link to='/'>
                <Button
                  size='small'
                  color='primary'
                  target='_blank'
                >
                  Edit
            </Button>
              </Link>
            </Grid>
            <Grid item style={{ margin: '2%' }}>
              <Button
                size='small'
                color='primary'
                target='_blank'
                // onClick={() => this.props.handleDeletePost(post.id)}
              >
                Delete
          </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default connect(null, { voteComment })(CommentItem)