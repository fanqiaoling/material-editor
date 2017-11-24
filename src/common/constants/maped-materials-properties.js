import materialsTypes from './materials-types';
import m from './maped-materials-properties';

const mapedMaterialsProperties = {
  [materialsTypes.LINE_BASIC_MATERIAL]: [m.COLOR, m.VERTEXCOLORS, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST],
  [materialsTypes.LINE_DASHED_MATERIAL]: [m.COLOR, m.VERTEXCOLORS, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST],
  [materialsTypes.MESH_BASIC_MATERIAL]: [m.COLOR, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.SPECULARMAP, m.ENVMAP, m.LIGHTMAP, m.AOMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_DEPTH_MATERIAL]: [m.COLOR, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.DISPLACEMENTMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_LAMBERT_MATERIAL]: [m.COLOR, m.EMISSIVE, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.SPECULARMAP, m.ENVMAP, m.LIGHTMAP, m.AOMAP, m.EMISSIVEMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_NORMAL_MATERIAL]: [m.VERTEXCOLORS, m.SKINNING, m.BUMPMAP, m.NORMALMAP, m.DISPLACEMENTMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_PHONG_MATERIAL]: [m.COLOR, m.EMISSIVE, m.SPECULAR, m.SHININESS, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.BUMPMAP, m.NORMALMAP, m.DISPLACEMENTMAP, m.SPECULARMAP, m.ENVMAP, m.LIGHTMAP, m.AOMAP, m.EMISSIVEMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_PHYSICAL_MATERIAL]: [m.COLOR, m.ROUGHNESS, m.METALNESS, m.EMISSIVE, m.CLEARCOAT, m.CLEARCOATROUGHNESS, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.BUMPMAP, m.NORMALMAP, m.DISPLACEMENTMAP, m.ROUGHNESSMAP, m.METALNESSMAP, m.ENVMAP, m.LIGHTMAP, m.AOMAP, m.EMISSIVEMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_STANDARD_MATERIAL]: [m.COLOR, m.ROUGHNESS, m.METALNESS, m.EMISSIVE, m.VERTEXCOLORS, m.SKINNING, m.MAP, m.ALPHAMAP, m.BUMPMAP, m.NORMALMAP, m.DISPLACEMENTMAP, m.ROUGHNESSMAP, m.METALNESSMAP, m.ENVMAP, m.LIGHTMAP, m.AOMAP, m.EMISSIVEMAP, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME],
  [materialsTypes.MESH_SHADER_MATERIAL]: [m.VERTEXCOLORS, m.SKINNING, m.SIDE, m.flatShading, m.BLENDING, m.OPACITY, m.TRANSPARENT, m.ALPHATEST, m.WIREFRAME]
};

export default mapedMaterialsProperties;
