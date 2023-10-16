import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import { removeFavourites } from "../redux/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavourites: (dish) => dispatch(removeFavourites(dish)),
    };
};

const Card = (props) => {
    const removeFav = () => {
        Alert.alert(
            "Delete Favourite?",
            "Are you sure you wish to delete the favourite dish " +
                props.item.name +
                "?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Canceled"),
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => props.removeFavourites(props.item),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Pressable onLongPress={() => removeFav()}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{ uri: props.item.image }}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.name}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 20,
        elevation: 5,
    },
    details: {
        padding: 25,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 7,
        fontSize: 20,
    },
});

export default connect(null, mapDispatchToProps)(Card);
