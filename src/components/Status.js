import React from 'react'

export const Status = () => 
<div>
  <table>
	<thead>
		<tr>
			<th>States</th>
			<th>Confirmed</th>
			<th>Active</th>
			<th>Recovered</th>
			<th>Deceased</th>
		</tr>
	</thead>
	<tbody>
		<tbody class="labels">
				<tr>
				<td>Tamil Nadu</td>
				<td>100</td>
				<td>10</td>
				<td>85</td>
				<td>5</td>
			</tr>
		</tbody>
		<tbody class="hide">
			<tr>
				<td>Chennai</td>
				<td>30</td>
				<td>5</td>
				<td>23</td>
				<td>2</td>
			</tr>
		</tbody>
		<tbody class="labels">
				<tr>
				<td>Andhra Pradesh</td>
				<td>80</td>
				<td>15</td>
				<td>60</td>
				<td>5</td>
			</tr>
		</tbody>
		<tbody class="hide">
			<td>Nellore</td>
				<td>30</td>
				<td>5</td>
				<td>23</td>
				<td>2</td>
		</tbody>		
	</tbody>
</table>
<div align="center">This is based on data from Covid-19 API</div>
</div>
