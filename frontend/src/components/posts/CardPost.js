import React, { Component } from 'react'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LabelOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import AccountCicleIcon  from '@material-ui/icons/AccountCircleOutlined'
import ThumbUpIcon  from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownIcon  from '@material-ui/icons/ThumbDownAltOutlined'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/CommentOutlined';
import { handleDeletePost } from '../../actions/posts'
import { Link } from 'react-router-dom'

import { UpDownVoteScore} from '../../actions/posts'
import { formatDate } from '../../utils/utils'


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
class CardPost extends Component {

  triggerDelete = (postId) => {
    this.props.handleDeletePost(postId, () => this.props.history.push('/'))
  }

  render() {
    const { post } = this.props

    if(post === undefined){
      return <div>Loading</div>
    }
    
    return (
      <Card>
        <CardContent>
          <Link to={`/${post.category}/${post.id}`}>
            <Typography gutterBottom variant="headline" component="h6">
              {post.title}
            </Typography>
          </Link>
          <Typography variant="subtitle2" style={styles.labelIcon} component="p">
            {formatDate(post.timestamp)}
          </Typography>
          <Typography variant="subtitle2" style={styles.labelIcon} component="p">
              <AccountCicleIcon/>{`author: ${post.author}`}
          </Typography>
          <Typography variant="subtitle2" style={styles.labelIcon} component="p">
            <LabelOutlinedIcon />
            {`${post.category}`}
          </Typography>
          <Typography variant="body1" component="p" style={{marginTop:'2%'}}>
            {post.body}
          </Typography>
          <div style={styles.boxCount}>
            <Typography variant="subtitle2" style={styles.labelIcon} component="p">
              {post.voteScore}
            </Typography>
            <IconButton
              onClick={() => this.props.UpDownVoteScore(post.id, 'upVote')}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton
              onClick={() => this.props.UpDownVoteScore(post.id, 'downVote')}>
              <ThumbDownIcon />
            </IconButton>
          </div>
          <div >
            <Typography variant="body1" component="p" style={styles.labelIcon}>
              <CommentIcon style={{marginRight: '2%'}} />
              {post.commentCount}
            </Typography>
          </div>
        </CardContent>
        <CardActions style={styles.cardAction}>
          <Link to={`/post/edit/${post.id}`}>
            <Button 
              size='small' 
              color='primary' 
              target='_blank'
              >
              Edit
            </Button>
          </Link>
          <Button 
            size='small' 
            color='primary' 
            target='_blank'
            onClick={() => this.triggerDelete(post.id)}
            >
           Delete
          </Button>
        </CardActions>
      </Card>
    )
  }
}

function mapStateToProps({posts},{id}){
  return {
    post: posts[id],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UpDownVoteScore: (postId, option) => dispatch(UpDownVoteScore(postId, option)),
    handleDeletePost: (postId, callback) => dispatch(handleDeletePost(postId, callback))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardPost))