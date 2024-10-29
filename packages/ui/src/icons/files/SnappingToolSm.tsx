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
const SnappingToolSm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.333 2h-1.2c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583C2 3.013 2 3.387 2 4.133v1.2M5.333 14h-1.2c-.746 0-1.12 0-1.405-.145a1.33 1.33 0 0 1-.583-.583C2 12.987 2 12.613 2 11.867v-1.2m12-5.334v-1.2c0-.746 0-1.12-.145-1.405a1.33 1.33 0 0 0-.583-.583C12.987 2 12.613 2 11.867 2h-1.2M14 10.667v1.2c0 .746 0 1.12-.145 1.405-.128.25-.332.455-.583.583-.285.145-.659.145-1.405.145h-1.2m0-6a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SnappingToolSm)
export default ForwardRef