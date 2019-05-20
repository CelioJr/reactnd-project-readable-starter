import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import CardPost from './CardPost'


import {filters, setFilter} from '../../actions/shared'

class Posts extends Component {

	handleChange = (event) => {
		this.setFilter(event.target.value)
	}

	render() {
		const { postsIds } = this.props

		return (
			<div>
				<Grid container 
				direction='row' 
				spacing={24} 
				style={{marginLeft:'6%', marginTop:'2%'}}>
				
				{/* Filter */}
					<Grid item xs={12}>
						<InputLabel style={{marginRight: '2%'}} htmlFor="filter">Filter</InputLabel>
						<Select
							value={this.props.filter}
							onChange={this.handleChange}
							inputProps={{
								name: 'filter',
								id: 'filter',
							}}
						>
							<MenuItem value={filters.TOP_SCORE}>Top Score</MenuItem>
							<MenuItem value={filters.MOST_RECENT}>Most Recent</MenuItem>
          	</Select>
					</Grid>

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

function mapsStateToProps({ posts, shared }, {match}) {
	const { category } = match.params
	const { filter } = shared

	console.log('filter', filter);

	return {
		postsIds: 
					Object.keys(posts)
						.filter(key => {
							if(category !== undefined){
								return posts[key].category === category
							}
								return posts[key] 
						})
						.sort((a,b) => { 
							posts[b][filter] - posts[a][filter]}
						),
		filter				
						
						// .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Posts)