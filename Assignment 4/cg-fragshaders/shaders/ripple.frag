#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 changed_texcoord = texcoord;
    changed_texcoord = (texcoord*2.0)-1.0;

    float radius = length(changed_texcoord);

    vec2 new_texcoord_offset = texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5)/60.0;

    changed_texcoord = texcoord + new_texcoord_offset;

    FragColor = texture(image, changed_texcoord);




}
