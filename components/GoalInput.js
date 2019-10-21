import React, {useState} from 'react'
import { StyleSheet, Button,TextInput, View, Modal} from 'react-native';




export default GoalInput = (props) =>{

    const [TextGoal, setTextGoal] = useState('')

    

    function handleTextInput(enteredText){
        setTextGoal(enteredText)
      }
     
    return (
        <Modal visible={props.PopModel} animationType="slide"  >
        <View style={styles.inputContainer}>
            <TextInput 
            onChangeText={handleTextInput}
            placeholder="Course Goal"
            value={TextGoal}
            style={styles.input} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button  
                    title="Add"
                    onPress={props.add.bind(this,TextGoal,setTextGoal) }
                    />
                </View>
                <View style={styles.button}>
                    <Button   
                    title="Cancel" color="#d6d7da"
                    onPress={props.close }
                    />
                </View>
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center', 
        alignItems:"center"
      },
      buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width: "60%"
      },
      button:{
        width: '40%'
      },
 

      input: {
        width:"80%",
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor:'#d6d7da', 
         padding: 10
      },
})