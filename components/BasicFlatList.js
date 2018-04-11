/*
Brennan Harvey
COS470
4/11/18
*/

import React, { Component } from 'react';
import { 
	AppRegistry, 
	FlatList, 
	StyleSheet, 
	Text, 
	View, 
	TouchableOpacity, 
	Modal, 
	TextInput,
	Platform} from 'react-native';
import flatListData from '../data/flatListData';

const isAndroid = Platform.OS == "android";

class FlatListItem extends Component{
	state = {
		editModal:false,
	};

	render(){
		return(
			<View style={{
					flex: 1,
					backgroundColor: this.props.index % 2 == 0 ? '#ADD8E6':'#00FFFF'
			}}>
				<TouchableOpacity onPress={()=>{
							this.setState({
								editModal:true
							})}
				}>
					<Text style={styles.flatListItem}>{this.props.item.taskName}</Text>
				</TouchableOpacity>

				<Modal visible={this.state.editModal}>

					<View style={styles.addModal}>

					<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>

						<TouchableOpacity style={styles.cancelButton} onPress={()=>{
							this.setState({
								editModal:false
							})}
						}>
							<Text style={styles.cancel}>Cancel</Text>

						</TouchableOpacity>

						<TouchableOpacity style={styles.saveButton} onPress={()=>{
							this.setState({
								editModal:false
							})}
						}>
							<Text style={styles.save}>Save</Text>
						</TouchableOpacity>
					</View>
					<View style={{flex: 1, alignItems: 'center'}}>
						<TextInput
							style={styles.taskNameInput}
          					onChangeText={(text) => this.setState({newTask: text})}
          					value={this.state.newTask}
          					placeholder="Enter task"
        				/>
        				<TextInput
							style={styles.descriptionInput}
          					onChangeText={(text) => this.setState({newDescription: text})}
          					value={this.state.newDescription}
          					placeholder="Description"
        				/>
        			</View>
					</View>
				</Modal>
			</View>
		);
	}
}


export default class BasicFlatList extends Component {
	
	state = {
		addModal:false,
	};


	render() {
		return(
			<View style={{flex: 1, marginTop: 22}}>

				<FlatList 
					data={flatListData}
					renderItem={({item, index})=>{
						return(
						<FlatListItem item={item} index={index}>

						</FlatListItem>);
					}}
					>

				</FlatList>

				<Modal visible={this.state.addModal}>

					<View style={styles.addModal}>

					<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>

						<TouchableOpacity style={styles.cancelButton} onPress={()=>{
							this.setState({
								addModal:false
							})}
						}>
							<Text style={styles.cancel}>Cancel</Text>

						</TouchableOpacity>

						<TouchableOpacity style={styles.saveButton} onPress={()=>{
							this.setState({
								addModal:false
							})}
						}>
							<Text style={styles.save}>Save</Text>
						</TouchableOpacity>
					</View>
					<View style={{flex: 1, alignItems: 'center'}}>
						<TextInput
							style={styles.taskNameInput}
          					onChangeText={(text) => this.setState({newTask: text})}
          					value={this.state.newTask}
          					placeholder="Enter task"
        				/>
        				<TextInput
							style={styles.descriptionInput}
          					onChangeText={(text) => this.setState({newDescription: text})}
          					value={this.state.newDescription}
          					placeholder="Description"
        				/>
        			</View>
					</View>
				</Modal>

				<TouchableOpacity style={styles.addButton} onPress={()=>{
					this.setState({addModal:true})}
				}>
					<Text style={styles.add}>Add Task</Text>
				</TouchableOpacity>

			</View>
			);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		color: 'white',
		padding: 10,
		fontSize: 16,
		textAlign: "center"
	},
	addButton: {
		height: "10%",
    	backgroundColor: "orange",
    	width: "100%",
    	justifyContent: "center"
	},
	add: {
		fontSize: 30,
		textAlign: "center"
	},
	addModal: {
		backgroundColor: "orange",
		height: "100%",
		width: "100%"
	},
	saveButton: {
		marginTop: "5%",
		height: "10%",
		width: "40%",
		justifyContent: "center",
	},
	cancelButton: {
		marginTop: "5%",
		height: "10%",
		width: "40%",
		justifyContent: "center",
	},
	save: {
		color: 'yellow',
		fontSize: 30,
		textAlign: "center"
	},
	cancel: {
		color: 'red',
		fontSize: 30,
		textAlign: "center"
	},
	taskNameInput: {
		backgroundColor: 'white',
    	height: 40,
    	marginLeft: 30,
    	marginRight: 30,
    	borderColor: "black",
    	borderWidth: 1,
    	width: "90%"
  	},
  	descriptionInput: {
  		backgroundColor: 'white',
    	height: 40,
    	marginLeft: 30,
    	marginRight: 30,
    	marginTop: 100,
    	borderColor: "black",
    	borderWidth: 1,
    	width: "90%"
  	},
})