/*
CPAL-1.0 License

The contents of this file are subject to the Common Public Attribution License
Version 1.0. (the "License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
https://github.com/ir-engine/ir-engine/blob/dev/LICENSE.
The License is based on the Mozilla Public License Version 1.1, but Sections 14
and 15 have been added to cover use of software over a computer network and 
provide for limited attribution for the Original Developer. In addition, 
Exhibit A has been modified to be consistent with Exhibit B.

Software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the
specific language governing rights and limitations under the License.

The Original Code is Infinite Reality Engine.

The Original Developer is the Initial Developer. The Initial Developer of the
Original Code is the Infinite Reality Engine team.

All portions of the code written by the Infinite Reality Engine team are Copyright © 2021-2023 
Infinite Reality Engine. All Rights Reserved.
*/

import type { SVGProps } from 'react'
import * as React from 'react'
import { Ref, forwardRef } from 'react'
const PanelsMenuLg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    role="img"
    stroke="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#080808"
      fillRule="evenodd"
      d="M4.161 0h1.984c.528 0 .982 0 1.357.03.395.033.788.104 1.167.297a3 3 0 0 1 1.31 1.311c.194.378.265.772.297 1.167.03.375.03.83.03 1.356v1.985c0 .527 0 .982-.03 1.357-.032.395-.103.788-.296 1.167a3 3 0 0 1-1.311 1.31c-.379.194-.772.265-1.167.297-.375.03-.83.03-1.357.03H4.161c-.527 0-.981 0-1.356-.03-.395-.032-.789-.103-1.167-.296A3 3 0 0 1 .327 8.67C.134 8.29.063 7.898.031 7.503A18 18 0 0 1 0 6.146V4.161c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167A3 3 0 0 1 1.638.327C2.016.134 2.41.063 2.805.031 3.18 0 3.635 0 4.161 0M2.968 2.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C2 3.25 2 3.623 2 4.2v1.908c0 .576 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085.283.023.655.024 1.232.024h1.907c.576 0 .949-.001 1.232-.024.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422.023-.283.024-.656.024-1.232V4.2c0-.577-.001-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C7.056 2 6.683 2 6.107 2H4.2c-.577 0-.949 0-1.232.024M16.198 0h-.038c-.527 0-.982 0-1.357.03-.395.033-.788.104-1.167.297a3 3 0 0 0-1.31 1.311c-.194.378-.265.772-.297 1.167-.03.375-.03.83-.03 1.356v1.985c0 .527 0 .982.03 1.357.032.395.103.788.296 1.167a3 3 0 0 0 1.311 1.31c.379.194.772.265 1.167.297.375.03.83.03 1.357.03h3.829c.528 0 .982 0 1.357-.03.395-.032.788-.103 1.167-.296a3 3 0 0 0 1.31-1.311c.194-.379.265-.772.297-1.167.031-.375.03-.83.03-1.357V4.161c0-.527.001-.981-.03-1.356-.032-.395-.103-.789-.296-1.167A3 3 0 0 0 22.513.327c-.379-.193-.772-.264-1.167-.296C20.971 0 20.516 0 19.989 0h-3.791m-1.654 2.109c.05-.025.15-.063.422-.085C15.249 2 15.622 2 16.198 2h3.753c.576 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422.023.283.024.655.024 1.232v1.908c0 .576 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085-.283.023-.655.024-1.232.024h-3.753c-.576 0-.949-.001-1.232-.024-.272-.022-.372-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422-.023-.283-.024-.656-.024-1.232V4.2c0-.577.001-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437M16.198 12h-.038c-.527 0-.982 0-1.357.03-.395.033-.788.104-1.167.297a3 3 0 0 0-1.31 1.311c-.194.378-.265.772-.297 1.167-.03.375-.03.83-.03 1.357v3.83c0 .527 0 .982.03 1.357.032.395.103.788.296 1.167a3 3 0 0 0 1.311 1.31c.379.194.772.265 1.167.297.375.03.83.03 1.357.03h3.829c.528 0 .982 0 1.357-.03.395-.032.788-.103 1.167-.296a3 3 0 0 0 1.31-1.311c.194-.379.265-.772.297-1.167.031-.375.03-.83.03-1.357v-3.83c0-.528.001-.982-.03-1.357-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.379-.193-.772-.264-1.167-.296-.375-.031-.83-.031-1.357-.031h-3.791m-1.654 2.109c.05-.025.15-.063.422-.085.283-.023.656-.024 1.232-.024h3.753c.576 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422.023.283.024.655.024 1.232v3.754c0 .576 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085-.283.023-.655.024-1.232.024h-3.753c-.576 0-.949 0-1.232-.024-.272-.022-.372-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422-.023-.283-.024-.656-.024-1.232V16.2c0-.577.001-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437M4.2 12h-.039c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C0 15.18 0 15.635 0 16.161v3.831c0 .528 0 .982.03 1.357.033.395.104.788.297 1.167a3 3 0 0 0 1.311 1.31c.378.194.772.265 1.167.297.375.03.83.03 1.356.03h1.984c.527 0 .982 0 1.357-.03.395-.032.788-.103 1.167-.296a3 3 0 0 0 1.31-1.311c.194-.379.265-.772.297-1.167.03-.375.03-.83.03-1.357v-3.83c0-.528 0-.982-.03-1.357-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.379-.193-.772-.264-1.167-.296C7.127 12 6.672 12 6.145 12H4.2m-1.654 2.109c.05-.025.15-.063.422-.085C3.25 14 3.623 14 4.2 14h1.907c.576 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422.023.283.024.655.024 1.232v3.754c0 .576-.001.949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085-.283.023-.656.024-1.232.024H4.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C2 20.903 2 20.53 2 19.954V16.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(PanelsMenuLg)
export default ForwardRef