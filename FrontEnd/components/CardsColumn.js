import { View, Text } from "react-native";
import React, { useState } from "react";
import PaymentMethodCard from "./PaymentMethodCard";

const CardsColumn = () => {
  // Fetching the top cards
  // useEffect(() => {

  // })
  return (
    <View>
      <PaymentMethodCard id={0} name={"DigiCFA Balance"} type={"Balance"} cardNumber={"N/A"} />
      <PaymentMethodCard
        id={0}
        name={"Bank of America Customized Cash Rewards VISA"}
        type={"Credit"}
        cardNumber={"6642"}
      />
      {/* <UserCard id={0} name={"Edmond Wang"} phoneNumber={"213 214 0824"} />
      <UserCard id={0} name={"Henry Liu"} phoneNumber={"949 307 3594‬"} />
      <UserCard id={0} name={"Daniel Bai"} phoneNumber={"unknown"} /> */}
    </View>
  );
};

export default CardsColumn;
