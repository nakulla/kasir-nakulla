import React, {Component} from 'react';
import ListCategories from '../component/ListCategories';
import Menus from '../component/Menus';
import {Row, Col, Container} from 'react-bootstrap';
import Hasil from '../component/Hasil';
import {API_URL} from '../utils/Constants';
import axios from 'axios';
import swal from 'sweetalert';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menus: [],
            categoryYangDipilih: 'Makanan',
            keranjangs: []
        };
    }

    componentDidMount() {
        this.fetchMenus();
        this.fetchKeranjangs();
    }

    componentDidUpdate(prevState) {
        if (this.state.keranjangs !== prevState.keranjangs) {
            this.fetchKeranjangs();
        }
    }

    fetchMenus = () => {
        axios
            .get(
                API_URL + "/products?category.nama=" + this.state.categoryYangDipilih
            )
            .then((res) => {
                const menus = res.data;
                this.setState({menus});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    fetchKeranjangs = () => {
        axios
            .get(API_URL + "/keranjangs")
            .then((res) => {
                const keranjangs = res.data;
                this.setState({keranjangs});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    changeCategory = (value) => {
        this.setState({categoryYangDipilih: value, menus: []});

        axios
            .get(API_URL + "/products?category.nama=" + value)
            .then((res) => {
                const menus = res.data;
                this.setState({menus});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    masukKeranjang = (value) => {
        axios
            .get(API_URL + "/keranjangs?product.id=" + value.id)
            .then((res) => {
                if (res.data.length === 0) {
                    const keranjang = {
                        jumlah: 1,
                        total_harga: value.harga,
                        product: value
                    };
                    axios
                        .post(API_URL + "/keranjangs", keranjang)
                        .then((res) => {
                            swal({
                                title: "Masuk Ke Keranjang!",
                                text: keranjang.product.nama + " telah dipesan",
                                icon: "success",
                                button: false,
                                timer: 1500
                            });
                            this.fetchKeranjangs();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    const keranjang = {
                        jumlah: res
                            .data[0]
                            .jumlah + 1,
                        total_harga: res
                            .data[0]
                            .total_harga + value.harga,
                        product: value
                    };

                    axios
                        .put(API_URL + "/keranjangs/" + res.data[0].id, keranjang)
                        .then((res) => {
                            swal({
                                title: "Masuk Ke Keranjang!",
                                text: keranjang.product.nama + " telah dipesan",
                                icon: "success",
                                button: false,
                                timer: 1500
                            });
                            this.fetchKeranjangs();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const {menus, categoryYangDipilih, keranjangs} = this.state;
        return (
                <div className="mt-3">
                    <Container fluid={true}>
                        <Row>
                            <ListCategories
                                changeCategory={this.changeCategory}
                                categoryYangDipilih={categoryYangDipilih}/>
                            <Col>
                                <h4 className="fw-bold">Daftar Menu</h4>
                                <hr/>
                                <Row>
                                    {
                                        menus && menus.map((menu, index) => (
                                            <Menus key={menu.id + index} menu={menu} masukKeranjang={this.masukKeranjang}/>
                                        ))
                                    }

                                </Row>
                            </Col>
                            <Hasil keranjangs={keranjangs} {...this.props}/>
                        </Row>
                    </Container>
                </div>
        );
    }
}
