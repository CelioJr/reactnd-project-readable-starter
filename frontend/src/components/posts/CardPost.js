import React, { Component } from 'react'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LabelOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import AccountCicleIcon  from '@material-ui/icons/AccountCircleOutlined'
import ThumbUpIcon  from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownIcon  from '@material-ui/icons/ThumbDownAltOutlined'
import IconButton from '@material-ui/core/IconButton';

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
  render() {
    const { post } = this.props

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h6">
            {post.title}
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
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
            <IconButton>
              <ThumbDownIcon />
            </IconButton>
          </div>
        </CardContent>
        <CardActions style={styles.cardAction}>
          <Button size='small' color='primary' target='_blank'>
            Edit
          </Button>
          <Button size='small' color='primary' target='_blank'>
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

export default withRouter(connect(mapStateToProps)(CardPost))