import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getStatusData } from '../actions/getStatusAction'

let styles

const DisplayStatusData = (props) => {
     const {
        container,
        text,
        button,
        buttonText
    } = styles
    
    console.log('render:', props.data)
    const { content, isFetching } = props.data;

    return (
        <View style={container}>
            <TouchableHighlight style={button} onPress={() => props.getStatus()}>
                <Text style="text">Load Status</Text>
            </TouchableHighlight>
            {
                isFetching && <Text>Loading</Text>
            }
            {
                content && content.server ?
                <Text style="text">Status: {content.server.message}</Text>
                : <Text style="text">No data</Text>
            }
            

        </View>
    )
}


styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
    console.log('state:', state.default)
  return {
    data: state.default
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getStatus: () => dispatch(getStatusData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayStatusData)