// import React, {Component} from 'react';
// import NavbarComponent from './component/NavbarComponent';
// import ListCategories from './component/ListCategories';
// import {Row, Col, Container} from 'react-bootstrap';
// import Hasil from './component/Hasil';
// import {API_URL} from './utils/Constants';
// import axios from 'axios';

// export default class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             menus: [],
//             categoryYangDipilih: 'Makanan'
//         };
//     }

//     componentDidMount() {
//         axios
//             .get(
//                 API_URL + "/products?category.nama=" + this.state.categoryYangDipilih
//             )
//             .then(res => {
//                 console.log("Response: ", res);
//                 const menus = res.data;
//                 this.setState({menus});
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     changeCategory = (value) => {
//         this.setState({categoryYangDipilih: value, menus: []});

//         axios
//             .get(API_URL + "/products?category.nama=" + value)
//             .then(res => {
//                 console.log("Response: ", res);
//                 const menus = res.data;
//                 this.setState({menus});
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     render() {
//         const {menus, categoryYangDipilih} = this.state;
//         return (
//             <div>
//                 <NavbarComponent/>
//                 <div className='mt-3'>
//                     <Container fluid={true}>
//                         <Row>
//                             <ListCategories
//                                 changeCategory={this.changeCategory}
//                                 categoryYangDipilih={categoryYangDipilih}/>
//                             <Col>
//                                 <h4 className='fw-bold'>Daftar Menu</h4>
//                                 <hr/>
//                                 <Row>
//                                     {menus && menus.map(menu => (<Menus key={menu.id} menu={menu}/>))}
//                                 </Row>
//                             </Col>
//                             <Hasil/>
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//         );
//     }
// }

// import React, {useState, useEffect} from 'react';
// import NavbarComponent from './component/NavbarComponent';
// import ListCategories from './component/ListCategories';
// import Menus from './component/Menus';
// import {Row, Col, Container} from 'react-bootstrap';
// import Hasil from './component/Hasil';
// import {API_URL} from './utils/Constants';
// import axios from 'axios';

// function App() {
//     const [menus, setMenus] = useState([]);
//     const [categoryYangDipilih, setCategoryYangDipilih] = useState('Makanan');

//     useEffect(() => {
//         fetchMenusByCategory(categoryYangDipilih);
//     }, [categoryYangDipilih]);

//     const fetchMenusByCategory = (category) => {
//         axios
//             .get(API_URL + `/products?category.nama=${category}`)
//             .then(res => {
//                 console.log("Response: ", res);
//                 const menusData = res.data;
//                 setMenus(menusData);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     const changeCategory = (value) => {
//         setCategoryYangDipilih(value);
//         setMenus([]);

//         axios
//         .get(API_URL + `/products?category.nama=`+value)
//         .then(res => {
//             console.log("Response: ", res);
//             const menusData = res.data;
//             setMenus(menusData);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     }

//     return (
//         <div>
//             <NavbarComponent/>
//             <div className='mt-3'>
//                 <Container fluid={true}>
//                     <Row>
//                         <ListCategories changeCategory={changeCategory}/>
//                         <Col>
//                             <h4 className='fw-bold'>Daftar Menu</h4>
//                             <hr/>
//                             <Row>
//                                 {menus && menus.map(menu => (<Menus key={menu.id} menu={menu}/>))}
//                             </Row>
//                         </Col>
//                         <Hasil/>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// }

// export default App;


// // ini listcategories

// import axios from 'axios';
// import React, {useEffect, useState} from 'react';
// import {Col, ListGroup} from 'react-bootstrap';
// import {API_URL} from '../utils/Constants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faUtensils, faCheese } from '@fortawesome/free-solid-svg-icons'

// const Icon = ({nama}) => {
//   if(nama == "Makanan") return <FontAwesomeIcon icon={faUtensils} className='icons-makanan' />
//   if(nama == "Minuman") return <FontAwesomeIcon icon={faCoffee} className='icons-minuman' />
//   if(nama == "Cemilan") return <FontAwesomeIcon icon={faCheese} className='icons-cemilan' />
  
//   return <FontAwesomeIcon icon={faUtensils} className='mr-2' />
// }

// function ListCategories() {
//     const [categories, setCategories] = useState([]);

//     // const string = ''
//     // string ? 'ada' : 'gaada';

//     // const number = 0
//     // number ? 'ada' : 'ggada';

//     // const array = []
//     // array ? 'ada' : 'gaada';

//     // array.length === 0 ? 'gaada' : 'ada'
//     // array.length > 0 ? 'ada' : 'gaada'

//     // const obj = {}
//     // obj ? 'ada' : 'gaada'

//     useEffect(() => {
//         axios
//             .get(API_URL + '/categories')
//             .then(res => {
//                 const categoriesData = res.data;
//                 setCategories(categoriesData);
//             })
//             .catch(error => {
//                 console.log('error', error);
//             });
//     }, []);

//     return (
//         <Col md={2} mt="2">
//             <h4 className='fw-bold'>Daftar Kategori</h4>
//             <hr/>
//             <ListGroup>
//                 {
//                     categories.length > 0 ? categories.map(category => (
//                         <ListGroup.Item key={category.id}>
//                             <h5>
//                                 <Icon nama={category.nama} />{category.nama}
//                             </h5>
//                         </ListGroup.Item>
//                     )) : null
//                 }
//             </ListGroup>
//         </Col>
//     );
// }

// export default ListCategories;
