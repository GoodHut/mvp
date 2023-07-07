import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionsColumn = () => {
  // Fetching the transactions from the backend
  // useEffect(() => {

  // })

  return (
    <View>
      <TransactionCard
        id={0}
        isPaying={true}
        title={"Apple Services"}
        date={"Jun 21"}
        description={"Automatic Payment"}
        amount={"2.99"}
      />
      <TransactionCard
        id={0}
        isPaying={true}
        title={"Apple Services"}
        date={"May 21"}
        description={"Automatic Payment"}
        amount={"2.99"}
      />
      <TransactionCard
        id={0}
        isPaying={true}
        title={"Apple Services"}
        date={"Apr 21"}
        description={"Automatic Payment"}
        amount={"2.99"}
      />
    </View>

    //     id, payee,date, title,amount
  );
};

export default TransactionsColumn;
