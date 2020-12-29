import React from 'react';
import styles from './WaiterNewOrder.module.scss';
import TablePicker from '../../common/TablePicker/TablePicker';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TablesButton from '../../common/TablesButton/TablesButton';

const products = [
  {
    'id': 'cake',
    'class': 'small',
    'name': 'Zio Stefano\'s Doughnut',
    'price': 9,
    'description': 'Treat yourself with this soft, freshly baked cookie. The recipe has been handed down from generation to generation in our family and it has won us several first place prizes in local competitions.',
    'images': [
      '<img class="active" src="images/doughnut.svg">',
    ],
  },
  {
    'id': 'breakfast',
    'class': 'small',
    'name': 'Zia Giulia\'s Breakfast',
    'price': 9,
    'description': 'There\'s no better way to start your day than indulging yourself with a cup of fresh Italian coffee and crispy waffels. Made just for you on the spot, this breakfast combo has been our guests\' favorite for over 50 years.',
    'images': [
      '<img class="active" src="images/breakfast.svg">',
    ],
    'params': [
      {
        'label': 'Coffee type',
        'type': 'radios',
        'options': [
          {
            'label': 'Latte',
            'price': 1,
            'default': true,
          },
          {
            'label': 'Cappuccino',
            'price': 1,
          },
          {
            'label': 'Espresso',
            'price': 1,
          },
          {
            'label': 'Macchiato ',
            'price': 1,
          },
        ],
      },
    ],
  },
  {
    'id': 'pizza',
    'name': 'Nonna Alba\'s Pizza',
    'price': 20,
    'description': 'The true taste of Italy &ndash; homemade pizza as prepared by our grandmothers in old-fashoned brick ovens. Choose your favorite topping and enjoy your comfort food! All ingredients come straight from eco-friendly, trusted farms in the Italian countryside.',
    'images': [
      '<img class="active" src="images/pizza/crust.svg">',
      '<img class="active sauce-tomato" src="images/pizza/tomato-sauce.svg">',
      '<img class="active sauce-cream" src="images/pizza/sour-cream.svg">',
      '<img class="active toppings-salami" src="images/pizza/salami.svg">',
      '<img class="active toppings-olives" src="images/pizza/olives.svg">',
      '<img class="active toppings-redPeppers" src="images/pizza/red-peppers.svg">',
      '<img class="active toppings-greenPeppers" src="images/pizza/green-peppers.svg">',
      '<img class="active toppings-mushrooms" src="images/pizza/mushrooms.svg">',
      '<img class="active toppings-basil" src="images/pizza/basil.svg">',
    ],
    'params': [
      {
        'label': 'Sauce',
        'type': 'radios',
        'options': [
          {
            'label': 'Tomato',
            'price': 0,
            'default': true,
          },
          {
            'label': 'Sour cream',
            'price': 2,
          },
        ],
      },
      {
        'label': 'Toppings',
        'type': 'checkboxes',
        'options': [
          {
            'label': 'Olives',
            'price': 2,
            'default': true,
          },
          {
            'label': 'Red peppers',
            'price': 2,
            'default': true,
          },
          {
            'label': 'Green peppers',
            'price': 2,
            'default': true,
          },
          {
            'label': 'Mushrooms',
            'price': 2,
            'default': true,
          },
          {
            'label': 'Fresh basil',
            'price': 2,
            'default': true,
          },
          {
            'label': 'Salami',
            'price': 3,
          },
        ],
      },
      {
        'label': 'pizza crust',
        'type': 'select',
        'options': [
          {
            'label': 'standard',
            'price': 0,
            'default': true,
          },
          {
            'label': 'thin',
            'price': 2,
          },
          {
            'label': 'thick',
            'price': 2,
          },
          {
            'label': 'cheese in edges',
            'price': 5,
          },
          {
            'label': 'wholewheat',
            'price': 3,
          },
          {
            'label': 'with extra gluten',
            'price': 0,
          },
        ],
      },
    ],
  },
  {
    'id': 'salad',
    'name': 'Nonno Alberto\'s Salad',
    'price': 9,
    'description': 'A delicious salad made of fresh, home-grown products on a crispy lettuce base.',
    'images': [
      '<img class="active" src="images/salad/plate.svg">',
      '<img class="active ingredients-cucumber" src="images/salad/cucumber.svg" style="z-index: 1;">',
      '<img class="active ingredients-tomatoes" src="images/salad/tomatoes.svg" style="z-index: 2;">',
      '<img class="active ingredients-olives" src="images/salad/salad-olives.svg" style="z-index: 3;">',
      '<img class="active ingredients-feta" src="images/salad/feta.svg" style="z-index: 4;">',
      '<img class="active ingredients-herbs" src="images/salad/herbs.svg" style="z-index: 5;">',
      '<img class="active ingredients-cheese" src="images/salad/cheese.svg" style="z-index: 6;">',
      '<img class="active ingredients-pepper" src="images/salad/black-pepper.svg" style="z-index: 7;">',
    ],
    'params': [
      {
        'label': 'Ingredients',
        'type': 'checkboxes',
        'options': [
          {
            'label': 'Cucumber',
            'price': 1,
            'default': true,
          },
          {
            'label': 'Tomatoes',
            'price': 1,
            'default': true,
          },
          {
            'label': 'Olives',
            'price': 1,
            'default': true,
          },
          {
            'label': 'Feta cheese',
            'price': 1,
          },
          {
            'label': 'Cheese',
            'price': 1,
          },
          {
            'label': 'Fresh herbs',
            'price': 1,
            'default': true,
          },
          {
            'label': 'Black pepper',
            'price': 1,
          },
        ],
      },
    ],
  },
];


class WaiterNewOrder extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h2>New order</h2>
        <TablePicker className={styles.table} />
        {products.map(product => (
          <div className={styles.category} key={product.id}>
            <h3 className={styles.name}>{product.name}</h3>

            {!product.params ? '' : product.params.map(param => (
              <div className={styles.param} key={param.label}>
                {
                  <FormControl className={styles.select} >
                    <InputLabel id="inputId">{param.label}</InputLabel>
                    <Select autoWidth={true} >
                      {!param.options ? '' : param.options.map(option => (
                        <MenuItem  key={option.label} value={option.label}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                }</div>
            ))}
            <p className={styles.price}>{product.price}</p>
            <TablesButton type={'component'} to={process.env.PUBLIC_URL + '/waiter/order/new'} name='Add'/>


          </div>

        ))}
        <div className={styles.summary}>
          <h3>SUMMARY</h3>
          <ol>
            <li>tu będą wyświetlały się dodane pozycje zamówienia</li>
          </ol>
          <TablesButton type={'summary'} to={process.env.PUBLIC_URL + '/waiter/'} name='Order'/>
        </div>
      </div>
    );
  }
}

export default WaiterNewOrder;




