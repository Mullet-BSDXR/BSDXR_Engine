import { useHookstate } from '@hookstate/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Color } from 'three'

import { Engine } from '@xrengine/engine/src/ecs/classes/Engine'
import { FogType } from '@xrengine/engine/src/scene/constants/FogType'
import { getFogSceneMetadataState } from '@xrengine/engine/src/scene/systems/FogSystem'

import ColorInput from '../inputs/ColorInput'
import InputGroup from '../inputs/InputGroup'
import NumericInputGroup from '../inputs/NumericInputGroup'
import SelectInput from '../inputs/SelectInput'
import PropertyGroup from './PropertyGroup'

const FogTypeOptions = [
  {
    label: 'Disabled',
    value: FogType.Disabled
  },
  {
    label: 'Linear',
    value: FogType.Linear
  },
  {
    label: 'Exponential',
    value: FogType.Exponential
  },
  {
    label: 'Brownian Motion',
    value: FogType.Brownian
  },
  {
    label: 'Height',
    value: FogType.Height
  }
]

export const FogSettingsEditor = () => {
  const { t } = useTranslation()

  const fogState = useHookstate(getFogSceneMetadataState(Engine.instance.currentWorld))
  const fog = fogState.get({ noproxy: true })

  return (
    <PropertyGroup name={t('editor:properties.fog.name')} description={t('editor:properties.fog.description')}>
      <InputGroup name="Fog Type" label={t('editor:properties.fog.lbl-fogType')}>
        <SelectInput options={FogTypeOptions} value={fog.type} onChange={(val: FogType) => fogState.type.set(val)} />
      </InputGroup>
      {fog.type !== FogType.Disabled && (
        <>
          <InputGroup name="Fog Color" label={t('editor:properties.fog.lbl-fogColor')}>
            <ColorInput
              value={new Color(fog.color)}
              onSelect={(val: Color) => fogState.color.set('#' + val.getHexString())}
            />
          </InputGroup>
          {fog.type === FogType.Linear ? (
            <>
              <NumericInputGroup
                name="Fog Near Distance"
                label={t('editor:properties.fog.lbl-forNearDistance')}
                smallStep={0.1}
                mediumStep={1}
                largeStep={10}
                min={0}
                value={fog.near}
                onChange={(val) => fogState.near.set(val)}
              />
              <NumericInputGroup
                name="Fog Far Distance"
                label={t('editor:properties.fog.lbl-fogFarDistance')}
                smallStep={1}
                mediumStep={100}
                largeStep={1000}
                min={0}
                value={fog.far}
                onChange={(val) => fogState.far.set(val)}
              />
            </>
          ) : (
            <>
              <NumericInputGroup
                name="Fog Density"
                label={t('editor:properties.fog.lbl-fogDensity')}
                smallStep={0.01}
                mediumStep={0.1}
                largeStep={0.25}
                min={0}
                value={fog.density}
                onChange={(val) => fogState.density.set(val)}
              />
              {fog.type !== FogType.Exponential && (
                <NumericInputGroup
                  name="Fog Height"
                  label={t('editor:properties.fog.lbl-fogHeight')}
                  smallStep={0.01}
                  mediumStep={0.1}
                  largeStep={0.25}
                  min={0}
                  value={fog.height}
                  onChange={(val) => fogState.height.set(val)}
                />
              )}
              {fog.type === FogType.Brownian && (
                <NumericInputGroup
                  name="Fog Time Scale"
                  label={t('editor:properties.fog.lbl-fogTimeScale')}
                  smallStep={0.01}
                  mediumStep={0.1}
                  largeStep={0.25}
                  min={0.001}
                  value={fog.timeScale}
                  onChange={(val) => fogState.timeScale.set(val)}
                />
              )}
            </>
          )}
        </>
      )}
    </PropertyGroup>
  )
}
