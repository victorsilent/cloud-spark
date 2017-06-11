import React, {Component} from 'react'

import dados from '../../dados/q2/itemD.csv'

export default class Questao2ItemD extends Component{
    render(){
        return (
            <div className='container'>
                
                <div className='columns'>
                    <div className='column col-6'>
                        <h3>Mapeamento da Distribuição Temporal das Revisões</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste, odit iure. Quo quod aperiam vel, velit eos sapiente odit quos quaerat saepe, labore reprehenderit eius sequi qui! At, nisi.</p>
                        <br />
                        <h5><strong>Informações Extras</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste, odit iure. Quo quod aperiam vel, velit eos sapiente odit quos quaerat saepe, labore reprehenderit eius sequi qui! At, nisi.</p>
                    </div>
                    <div className='column col-6'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dados.slice(0,30).map(row => {
                                    return (
                                    <tr>
                                        <td>{row.createdAt}</td>
                                        <td>{row.count}</td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}