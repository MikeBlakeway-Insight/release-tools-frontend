import React from 'react'
import { Grid } from 'semantic-ui-react'

/**
 * ==============
 * * -- Dashboard Component -- *
 *
 * Location:
 * src/layout/Dashboard/index.jsx
 *
 * Description
 * ...
 */
export const Dashboard = () => {
	return (
		<Grid columns='equal' padded stackable>
			<div className='row'>
				<div className='column'>
					<div className='ui segments no-padding'>
						<div className='ui segment basic no-padding-bottom'>
							<h5 className='ui left floated header'>Sales Statistics</h5>
							<h5 className='ui right floated header'>
								<i className='ion-ios-arrow-up icon link'></i>
								<i className='ion-ios-refresh-empty refreshing icon link'></i>
								<i className='ion-ios-close-empty icon link'></i>
							</h5>
							<div className='clearfix'></div>
						</div>
						<div className='ui basic segment no-padding'>
							<div
								id='chart-curved-line'
								className='flot-chart'
								style={{
									width: '100%',
									height: '200px',
									padding: '0px',
									position: 'relative',
								}}
							>
								<canvas
									className='flot-base'
									width='2928'
									height='400'
									style={{
										direction: 'ltr',
										position: 'absolute',
										left: '0px',
										top: '0px',
										width: '1464px',
										height: '200px',
									}}
								></canvas>
								<canvas
									className='flot-overlay'
									width='2928'
									height='400'
									style={{
										direction: 'ltr',
										position: 'absolute',
										left: '0px',
										top: '0px',
										width: '1464px',
										height: '200px',
									}}
								></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='sixteen wide tablet four wide computer column'>
					<div className='ui segment left aligned'>
						<div className='ui  statistic'>
							<div className='value counter'>3,952</div>
							<div className='label'>Orders</div>
							<i className='icon ion-ios-cart teal statisticIcon'></i>
						</div>
						<div
							id='flot-order'
							className='flotchart'
							style={{ padding: '0px', position: 'relative' }}
						>
							<canvas
								className='flot-base'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
							<canvas
								className='flot-overlay'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
						</div>
					</div>
				</div>

				<div className='sixteen wide tablet four wide computer column'>
					<div className='ui segment left aligned'>
						<div className='ui  statistic'>
							<div className='value'>
								<span className='counter'>57.6</span> %
							</div>
							<div className='label'>Average Time</div>
							<i className='icon ion-ios-timer blue statisticIcon'></i>
						</div>
						<div
							id='flot-avarage'
							className='flotchart'
							style={{ padding: '0px', position: 'relative' }}
						>
							<canvas
								className='flot-base'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
							<canvas
								className='flot-overlay'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
						</div>
					</div>
				</div>
				<div className='sixteen wide tablet four wide computer column'>
					<div className='ui segment left aligned'>
						<div className='ui  statistic'>
							<div className='value counter'>3,112</div>
							<div className='label'>Saves</div>
							<i className='icon ion-magnet purple statisticIcon'></i>
						</div>
						<div
							id='flot-saves'
							className='flotchart'
							style={{ padding: '0px', position: 'relative' }}
						>
							<canvas
								className='flot-base'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
							<canvas
								className='flot-overlay'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
						</div>
					</div>
				</div>
				<div className='sixteen wide tablet four wide computer column'>
					<div className='ui segment left aligned'>
						<div className='ui  statistic'>
							<div className='value counter'>9,582</div>
							<div className='label'>Page Views</div>
							<i className='icon ion-trophy red statisticIcon'></i>
						</div>
						<div
							id='flot-view'
							className='flotchart'
							style={{ padding: '0px', position: 'relative' }}
						>
							<canvas
								className='flot-base'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
							<canvas
								className='flot-overlay'
								width='646'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '323px',
									height: '100px',
								}}
							></canvas>
						</div>
					</div>
				</div>
			</div>

			<div className='stretched row'>
				<div className='sixteen wide tablet ten wide computer column'>
					<div className='ui segments'>
						<div className='ui segment no-padding-bottom'>
							<h5 className='ui left floated header'>Populer Browsers</h5>
							<h5 className='ui right floated header'>
								<i className='ion-ios-arrow-up icon link'></i>
								<i className='ion-ios-refresh-empty refreshing icon link'></i>
								<i className='ion-ios-close-empty icon link'></i>
							</h5>
							<div className='clearfix'></div>
						</div>
						<div className='ui segment left aligned'>
							<table className='ui very basic center aligned  celled table'>
								<thead>
									<tr>
										<th>#</th>
										<th>Project Name</th>
										<th>Date</th>
										<th>Accept</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Chrome</td>
										<td>10 July 2014</td>
										<td>
											<i className='green check icon'></i>
										</td>
										<td>
											<a className='ui blue mini basic label'>Update</a>
										</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Mozilla</td>
										<td>2 Feb 2010</td>
										<td>
											<i className='red close icon'></i>
										</td>
										<td>
											<a className='ui green mini basic label'>Upgrade</a>
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Yandex</td>
										<td>29 Aug 2012</td>
										<td>
											<i className='green check icon'></i>
										</td>
										<td>
											<a className='ui purple mini basic label'>Coming Soon</a>
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Internet Explorer</td>
										<td>5 Sep 2005</td>
										<td>
											<i className='red close icon'></i>
										</td>
										<td>
											<a className='ui red mini basic label'>Released</a>
										</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Safari</td>
										<td>1 Jan 2002</td>
										<td>
											<i className='red close icon'></i>
										</td>
										<td>
											<a className='ui yellow mini basic label'>Upgrade</a>
										</td>
									</tr>
								</tbody>
							</table>
							<div className='ui inverted dimmer'>
								<div className='ui text loader'>Loading</div>
							</div>
						</div>
					</div>
				</div>
				<div className='sixteen wide tablet six wide computer column'>
					<div className='ui segment'>
						<h2 className='ui   center aligned header'>
							<div className='content'>
								Melbourne
								<div className='sub header'>Thursday, 29 November</div>
							</div>
						</h2>
						<h3 className='ui center aligned header'>14 °</h3>
						<div className='ui divider'></div>
						<div className='ui five column centered grid'>
							<div className='column center aligned'>
								<p>Wed</p>
								<p>
									<i className='wi wi-day-cloudy'></i>
								</p>
								<p>12°</p>
							</div>
							<div className='column center aligned'>
								<p>Thu</p>
								<p>
									<i className='wi wi-day-sleet'></i>
								</p>
								<p>10°</p>
							</div>
							<div className='column center aligned'>
								<p>Fri</p>
								<p>
									<i className='wi wi-day-cloudy-gusts'></i>
								</p>
								<p>8°</p>
							</div>
							<div className='column center aligned'>
								<p>Sat</p>
								<p>
									<i className='wi wi-day-sprinkle'></i>
								</p>
								<p>-5°</p>
							</div>
							<div className='column center aligned'>
								<p>Sun</p>
								<p>
									<i className='wi wi-day-lightning'></i>
								</p>
								<p>14°</p>
							</div>
						</div>
						<div
							id='flot-weather'
							className='flotchart'
							style={{ padding: '0px', position: 'relative' }}
						>
							<canvas
								className='flot-base'
								width='1018'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '509px',
									height: '100px',
								}}
							></canvas>
							<canvas
								className='flot-overlay'
								width='1018'
								height='200'
								style={{
									direction: 'ltr',
									position: 'absolute',
									left: '0px',
									top: '0px',
									width: '509px',
									height: '100px',
								}}
							></canvas>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='sixteen wide tablet sixteen wide computer column'>
					<div className='ui segments'>
						<div className='ui segment no-padding-bottom'>
							<h5 className='ui left floated header'>Browser Usage Statistics</h5>
							<h5 className='ui right floated header'>
								<i className='ion-ios-arrow-up icon link'></i>
								<i className='ion-ios-refresh-empty refreshing icon link'></i>
								<i className='ion-ios-close-empty icon link'></i>
							</h5>
							<div className='clearfix'></div>
						</div>
						<div className='ui segment'>
							<div className='ui grid'>
								<div className='stretched row'>
									<div className='sixteen wide tablet ten wide computer column'>
										<iframe
											className='chartjs-hidden-iframe'
											style={{
												width: '100%',
												display: 'block',
												border: '0px',
												height: '0px',
												margin: '0px',
												position: 'absolute',
												inset: '0px',
											}}
										></iframe>
										<canvas
											id='chart_1'
											width='1782'
											height='800'
											style={{ width: '891px', height: '400px' }}
										></canvas>
									</div>
									<div className='sixteen wide tablet six wide computer column'>
										<div className='ui horizontal large statistic'>
											<div className='value counter'>16,482</div>
											<div className='label'>Your Profile Views</div>
										</div>
										<div
											id='flot-profile'
											className='flotchart'
											style={{ padding: '0px', position: 'relative' }}
										>
											<canvas
												className='flot-base'
												width='1050'
												height='246'
												style={{
													direction: 'ltr',
													position: 'absolute',
													left: '0px',
													top: '0px',
													width: '525px',
													height: '123px',
												}}
											></canvas>
											<canvas
												className='flot-overlay'
												width='1050'
												height='246'
												style={{
													direction: 'ltr',
													position: 'absolute',
													left: '0px',
													top: '0px',
													width: '525px',
													height: '123px',
												}}
											></canvas>
										</div>
										<table className='ui celled striped table'>
											<thead>
												<tr>
													<th style={{ width: '10%' }}>#</th>
													<th style={{ width: '40%' }}>Browser</th>
													<th style={{ width: '25%' }}>Sessions</th>
													<th style={{ width: '25%' }}>Up/Down</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Chrome</td>
													<td>4325</td>
													<td className='text-success'>+3.26%</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Firefox</td>
													<td>3257</td>
													<td className='text-danger'>-2.14%</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Edge</td>
													<td>2314</td>
													<td className='text-success'>+2.92%</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='stretched row'>
				<div className='sixteen wide tablet five wide computer column'>
					<div className='ui segment'>
						<h5 className='ui dividing header'>Recent Activities</h5>
						<div className='ui feed timeline'>
							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/Abraham.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a className='user'>Francis Baldwin</a> added you as a friend
										<div className='date'>1 Hour Ago</div>
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 4 Likes
										</a>
									</div>
								</div>
							</div>
							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/carol.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a>Lindsey Daniels</a> added <a>2 new illustrations</a>
										<div className='date'>4 days ago</div>
									</div>
									<div className='extra images'>
										<a>
											<img src='img/bg/1.png' alt='bg-image' />
										</a>
										<a>
											<img src='img/bg/3.png' alt='bg-image' />
										</a>
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 1 Like
										</a>
									</div>
								</div>
							</div>
							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/Daryl.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a className='user'>Walter Stewart</a> added you as a friend
										<div className='date'>2 Days Ago</div>
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 8 Likes
										</a>
									</div>
								</div>
							</div>
							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/deana.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a>Loretta Burke</a> posted on his page
										<div className='date'>3 days ago</div>
									</div>
									<div className='extra text'>
										Ours is a life of constant reruns. We are always circling back to
										where we would we started, then starting all over again. Even if we do
										not run extra laps that day, we surely will come back for more of the
										same another day soon.
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 5 Likes
										</a>
									</div>
								</div>
							</div>
							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/enid.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a>Meredith Barnes</a> added <a>2 new photos</a> of you
										<div className='date'>4 days ago</div>
									</div>
									<div className='extra images'>
										<a>
											<img src='img/bg/5.png' alt='bg-image' />
										</a>
										<a>
											<img src='img/bg/6.png' alt='bg-image' />
										</a>
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 41 Likes
										</a>
									</div>
								</div>
							</div>

							<div className='event'>
								<div className='label'>
									<img src='img/avatar/people/Meggie.png' alt='label-image' />
								</div>
								<div className='content'>
									<div className='summary'>
										<a>Jennifer Clarke</a> posted on his page
										<div className='date'>3 days ago</div>
									</div>
									<div className='extra text'>
										Ours is a life of constant reruns. We are always circling back to
										where we had started, then starting all over again.
									</div>
									<div className='meta'>
										<a className='like'>
											<i className='like icon'></i> 5 Likes
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='sixteen wide tablet five wide computer column'>
					<div className='ui segment'>
						<div className='ui middle aligned relaxed list'>
							<div className='item'>
								<div className='right floated content'>
									<a className='ui red basic label'>Just Now</a>
								</div>
								<i className='icon large ion-pizza circular red'></i>
								<div className='content'>You have 4 pending tasks.</div>
							</div>
							<div className='item'>
								<div className='right floated content'>
									<a className='ui teal basic label'>2 Hours ago</a>
								</div>
								<i className='icon large ion-lock-combination circular teal'></i>

								<div className='content'>Server #1 overloaded.</div>
							</div>
							<div className='item'>
								<div className='right floated content'>
									<a className='ui blue basic label'>31 May</a>
								</div>
								<i className='icon large ion-bowtie circular blue'></i>

								<div className='content'>New order received.</div>
							</div>
							<div className='item'>
								<div className='right floated content'>
									<a className='ui purple basic label'>30 May</a>
								</div>
								<i className='icon large ion-bonfire circular purple'></i>

								<div className='content'>New user registered.</div>
							</div>
							<div className='item'>
								<div className='right floated content'>
									<a className='ui brown basic label'>27 May</a>
								</div>
								<i className='icon large ion-scissors circular brown'></i>

								<div className='content'>New Version just arrived.</div>
							</div>
						</div>
					</div>
					<div className='ui basic segment no-padding'>
						<div className='ui fluid one cards special'>
							<div className='card fluid'>
								<div className='blurring dimmable image'>
									<div className='ui dimmer'>
										<div className='content'>
											<div className='center'>
												<div className='ui inverted button'>Add Friend</div>
											</div>
										</div>
									</div>
									<img src='img/gallery/images5.jpg' />
								</div>
								<div className='content'>
									<a className='header'>Samantha Green</a>
									<div className='meta'>
										<span className='date'>Melbourne</span>
									</div>
								</div>
								<div className='extra content'>
									<a>
										<i className='like icon'></i> 214 Likes
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='sixteen wide tablet six wide computer column'>
					<div className='ui segment'>
						<div className='chat'>
							<div className='chat-header clearfix'>
								<img
									className='ui circular image'
									src='img/avatar/people/Meggie.png'
									alt='avatar'
								/>

								<div className='chat-about'>
									<div className='chat-with'>Chat with Vincent Porter</div>
									<div className='chat-num-messages'>Already 14 messages</div>
								</div>
								<i className='fa fa-star'></i>
							</div>
							{/* end chat-header  */}

							<div className='chat-history' style={{ overflow: 'hidden' }}>
								<ul>
									<li className='clearfix'>
										<div className='message-data align-right'>
											<span className='message-data-time'>10:10 AM, Today</span> &nbsp,
											&nbsp,
											<span className='message-data-name'>Olia</span>{' '}
											<i className='icon circle me'></i>
										</div>
										<div className='message other-message float-right'>Hi Vincent</div>
									</li>

									<li>
										<div className='message-data'>
											<span className='message-data-name'>
												<i className='icon circle online'></i> Vincent
											</span>
											<span className='message-data-time'>10:12 AM, Today</span>
										</div>
										<div className='message my-message'>Are we meeting today?</div>
									</li>

									<li className='clearfix'>
										<div className='message-data align-right'>
											<span className='message-data-time'>10:14 AM, Today</span> &nbsp,
											&nbsp,
											<span className='message-data-name'>Olia</span>{' '}
											<i className='icon circle me'></i>
										</div>
										<div className='message other-message float-right'>
											Well I am not sure.
										</div>
									</li>

									<li>
										<div className='message-data'>
											<span className='message-data-name'>
												<i className='icon circle online'></i> Vincent
											</span>
											<span className='message-data-time'>10:20 AM, Today</span>
										</div>
										<div className='message my-message'>Actually everything was fine</div>
									</li>
								</ul>
							</div>
							{/* end chat-history  */}
						</div>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default Dashboard
