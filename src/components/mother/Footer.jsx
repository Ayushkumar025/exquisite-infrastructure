import React from 'react'
import Logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom'

export const Footer
 = () => {
  return (
    <div>
        <footer className="bg-white border-t border-gray-200 py-12">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                      <div className="flex items-center">
                        <img src={Logo} className="h-12 mr-2" alt="Exquisite Logo" />
                        <span className="text-xl font-bold">Exquisite Infrazone
</span>
                      </div>
                      <p className="text-gray-500 mt-2">
                        Premium investment opportunities
                      </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-gray-600 font-medium mb-4">Investments</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                             to='/about-us'
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              Private Equity
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#f5d648] transition-colors"
                            >
                              Real Estate
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              Venture Capital
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-gray-600 font-medium mb-4">Company</h3>
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#f5d648] transition-colors"
                            >
                              Performance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              Insights
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-gray-600 font-medium mb-4">Connect</h3>
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              Contact
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#f5d648] transition-colors"
                            >
                              Careers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-500 hover:text-[#ff6700] transition-colors"
                            >
                              LinkedIn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
                    <p>
                      © {new Date().getFullYear()} Exquisite Infrazone Pvt Ltd
. All rights
                      reserved.
                    </p>
                    <p className="mt-2 text-sm">
                      Past performance is not indicative of future results.
                    </p>
                  </div>
                </div>
              </footer>

    </div>
  )
}
