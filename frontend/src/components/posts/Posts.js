import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import CardPost from './CardPost'

class Posts extends Component {
	render() {
		const { postsIds } = this.props

		return (
			<div>
				<Grid container 
				direction='row' 
				spacing={24} 
				style={{marginLeft:'6%', marginTop:'2%'}}>
					{postsIds !== undefined && postsIds.map(id => (
						<Grid key={id} item xs={5}>
							<CardPost id={id}/>
						</Grid>
					))}
				</Grid>
			</div>
		)
	}
}

function mapsStateToProps({ posts }) {
	return {
		postsIds: Object.keys(posts).sort((a,b) => posts[b].timestamp - posts[a].timestamp)
	}
}

export default connect(mapsStateToProps)(Posts)