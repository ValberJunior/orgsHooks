const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection:'row',
        // para fazer o efeito boxShadow no Android
        elevation: 4,
        // para fazer o efeito boxShadow no IOS
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    icon:{
        width: 48,
        height:48,
        borderRadius:6,
        marginVertical: 16,
        marginLeft: 16
    },
    details:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:8,
        marginVertical:16,
        marginRight:16
    },
    name:{
        fontSize:14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distance:{
        fontSize:12,
        lineHeight:19
    }
});

export default styles;