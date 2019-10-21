import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default function GoalItem(props){
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.ListItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
       

    )
}

const styles = StyleSheet.create({
    ListItems: {
        marginBottom: 5,
        padding:20,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
})