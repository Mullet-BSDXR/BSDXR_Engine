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
const NormalRenderSm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    role="img"
    stroke="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#080808"
      fillRule="evenodd"
      d="M13.067 8A5.067 5.067 0 1 1 2.934 8a5.067 5.067 0 0 1 10.133 0m1.6 0A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0M7.335 5.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333m-2 1.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M8 7.333a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(NormalRenderSm)
export default ForwardRef
