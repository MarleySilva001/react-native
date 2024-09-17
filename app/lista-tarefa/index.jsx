import { React, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable, TextInput, SafeAreaView } from "react-native";

const Data = [
  {
    id: '1',
    nome: 'Fazer o dever de casa',
    feito: false
  },
  {
    id: '2',
    nome: 'Jogar o lixo fora',
    feito: false
  },
  {
    id: '3',
    nome: 'Lavar os pratos',
    feito: false
  },
  {
    id: '4',
    nome: 'Arrumar o quarto',
    feito: false
  }
]

const Item = ({ item, onPress, onPressIn, onPressOut, onDelete }) => (
  <View style={styles.line}>
  <Pressable
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    style={({ pressed }) => [
      styles.btn,
      {
        backgroundColor: pressed ? '#e0e0e0' : '#fff',
        elevation: pressed ? 5 : 0, 
      }
    ]}
  >
    <Text style={{ textDecorationLine: item.feito ? 'line-through' : 'none' }}>
      {item.nome}
    </Text>
  </Pressable>
  <Pressable onPress={onDelete} style={styles.deleteButton}>
  <Text style={styles.deleteText}>X</Text>
</Pressable>
</View>
);

const ListaTarefa = () => {
  const [data, setData] = useState(Data);
  const [novoItem, setNovoItem] = useState(''); 

  const adicionarTarefa = () => {
    if (novoItem.trim() !== '') {
      const novoId = (data.length + 1).toString(); 
      const novaTarefa = { id: novoId, nome: novoItem, feito: false };
      setData([...data, novaTarefa]);
      setNovoItem(''); 
    }
  }

  const concluirTarefa = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, feito: !item.feito } : item
    );
    setData(updatedData);
  };

  const excluirTarefa = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => concluirTarefa(item.id)}
      onDelete={() => excluirTarefa(item.id)}
      onPressIn={() => {}}
      onPressOut={() => {}}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          value={novoItem}
          onChangeText={setNovoItem}
        />
        <Pressable 
        style={styles.inputbnt}
        onPress={adicionarTarefa} 
        ><Text>Adicionar</Text></Pressable>
      </View>
      <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  line: {
    flexDirection:'row',
    marginBottom: 2.5,
    minWidth: 330,
    maxWidth: 330,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 8, 
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 5,
    marginRight: 8, 
    flex: 1,
    minWidth:50,  
  },
  deleteButton: {
    backgroundColor: '#f44336', 
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent:'center'
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  inputbnt: {
    backgroundColor: '#f1f1f1',
    justifyContent:'center',
    borderRadius: 6,
    paddingHorizontal: 6,
  }
})

export default ListaTarefa;