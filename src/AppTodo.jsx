import React, { useState, useEffect } from 'react';
import styles from './styles/AppTodo.module.css';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
// import {useImmer} from 'use-immer';

export default function AppTodo() {
  const [items, setItems] = useState(() => {
    const localItems = JSON.parse(localStorage.getItem('items'));
    return localItems || [];
  });

  const checkItem = (e) => {
    const id = e.target.id;
    // setItems(prev => {
    //   const item = prev.find((el) => el.key === id);
    //   item.checked = !item.checked;
    // });
    setItems(prev => 
      prev.map(item => {
        if (item.key === id) {
          return {...item, "checked": !item['checked']};
        }
        return item
      })
    );
  }

  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
  }

  const deleteItem = (e) => {
    const key = e.currentTarget.id;
    setItems(items => items.filter(item => item.key !== key));
  }

  const filterItem = (e) => {
    const name = e.target.name;
    const checkedItem = items.filter(item => item.checked === true);
    const uncheckedItem = items.filter(item => item.checked === false);
    const checkedKey = checkedItem.map((item) => item.key);
    const uncheckedKey = uncheckedItem.map((item) => item.key);

    switch (name) {
      case 'all': {
        
      }

      case 'active': {
  
      }

      case 'completed': {
     
      }

      default: throw Error(`unvalid name : ${name}`)
    }
  }

  const displayItem = (key) => {


    // return display;
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <section className={styles.todo}>
      <Header filterItem={filterItem} />
      <Items 
        mainItems={items}
        deleteItem={deleteItem}
        checkItem={checkItem}
        displayItem={displayItem}
      />
      <Footer addItem={addItem}/>
    </section>
  );
}