import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer class="py-2 bg-theme mt-auto">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
                <small class="text-silver">Copyright &copy; Azon Inventory & POS Management System {new Date().getFullYear()} | Version: 0.1.0 Beta</small>
                <div>
                    <small class="text-silver">Design & developed by <a className={'text-white'} href='https://www.azoncode.com/'>Azoncode</a></small>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer
