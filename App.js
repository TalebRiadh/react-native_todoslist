import React, {useState} from 'react';
import { StyleSheet, View,   FlatList,Button} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import SomeComponent from './components/SomeComponent'
export default function App() {
 const [ListGoal, setListGoal] = useState([])
 const [PopModel, setPopModel]= useState(false)
 function addTextGoal(goalTitle,setTextGoal){
   if(goalTitle.length === 0){
     return
   }
   /*const mylistgoal = ListGoal
   mylistgoal.push(TextGoal)
   setListGoal(mylistgoal)*/
   setTextGoal("")
   setPopModel(false)
   setListGoal(currentGoals =>[
     ...currentGoals,
     {
        key: Math.random().toString(),
        value:goalTitle
    }
   ])
 }

 function removeGoal(goalId){
  setListGoal(currentGoals => {
    return currentGoals.filter((goal) => goal.key !== goalId)
  })
 }

 function showItemConsole(item){
   console.log(item)
 }

 function closeModal(){
  setPopModel(false)
 }
  return (  
    <View style={styles.screen}>
      <Button  title="Add new goal" onPress={()=>{setPopModel(true)}}/>
        <GoalInput PopModel={PopModel}  add={addTextGoal} close={closeModal}  />
        <FlatList
        style={styles.listContainer}
        data={ListGoal} renderItem={itemData =>
        <GoalItem id={itemData.item.key} onDelete={removeGoal} title={itemData.item.value} />} />
    </View>

  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
 
  listContainer:{
    marginTop:30,

  }
})

