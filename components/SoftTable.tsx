import Image from 'next/image'
import React from 'react'

const SoftTable = () => {
  return (
      <div><section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div className="flex flex-col justify-center h-full">
              {/* <!-- Table --> */}
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                      <h2 className="font-semibold text-gray-800">Customers</h2>
                  </header>
                  <div className="p-3">
                      <div className="overflow-x-auto">
                          <table className="table-auto w-full">
                              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                  <tr>
                                      <th className="p-2 whitespace-nowrap">
                                          <div className="font-semibold text-left">Name</div>
                                      </th>
                                      <th className="p-2 whitespace-nowrap">
                                          <div className="font-semibold text-left">Email</div>
                                      </th>
                                      <th className="p-2 whitespace-nowrap">
                                          <div className="font-semibold text-left">Spent</div>
                                      </th>
                                      <th className="p-2 whitespace-nowrap">
                                          <div className="font-semibold text-center">Country</div>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="text-sm divide-y divide-gray-100">
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="w-6 h-6 flex-shrink-0 mr-2 sm:mr-3">
                                                  <Image
                                                      src={require('../assets/images/Avatar.png')}
                                                      alt='website.com'
                                                      className='w-6 h-6'
                                                  />
                                              </div>
                                              <div className="font-medium text-gray-800">Burak Long</div>
                                          </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left">longburak@gmail.com</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-left font-medium text-green-500">$1,890.66</div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                          <div className="text-lg text-center">??</div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </section></div>
  )
}

export default SoftTable