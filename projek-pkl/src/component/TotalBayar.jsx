import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../utils/Constants';
import axios from 'axios'; // Import axios

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_harga: totalBayar,
      menus: this.props.keranjangs,
    };

    axios
      .post(API_URL + '/pesanans', pesanan)
      .then((res) => {
        this.props.history.push('/Sukses');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className='fixed-bottom'>
        <Row>
          <Col md={{ span: 3, offset: 9 }} className='bayar'>
            <h5 className='mt-3'>
              Total Harga : <strong className='rupiah'>Rp. {numberWithCommas(TotalBayar)}</strong>
            </h5>
            <Button
              className='btn-bayar'
              variant='primary'
              onClick={() => this.submitTotalBayar(TotalBayar)}> {/* Menggunakan TotalBayar yang sudah dihitung */}
              <FontAwesomeIcon icon={faShoppingCart} />
              <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
