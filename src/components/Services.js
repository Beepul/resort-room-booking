import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            { icon: <FaCocktail/>, title: 'free coctail', info: 'Lorem ispoun ansi nsuiems ksins. jaisjr amdjhdiems!'},
            { icon: <FaHiking/>, title: 'endless hiking', info: 'Lorem ispoun ansi nsuiems ksins. jaisjr amdjhdiems!'},
            { icon: <FaShuttleVan/>, title: 'free shuttle', info: 'Lorem ispoun ansi nsuiems ksins. jaisjr amdjhdiems!'},
            { icon: <FaBeer/>, title: 'strong beer', info: 'Lorem ispoun ansi nsuiems ksins. jaisjr amdjhdiems!'},
        ]
    }
  render() {
    return (
      <div className='services'>
        <Title  title='services' />
        <div className='services-center'>
            {this.state.services.map((item, index) => (
                <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            ))}
        </div>
      </div>
    )
  }
}
