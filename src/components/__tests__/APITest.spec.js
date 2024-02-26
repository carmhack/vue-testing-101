import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import APITest from '../APITest.vue'
import axios from 'axios'

vi.mock('axios');

describe('APITest', () => {
  beforeEach(() => {
    axios.get.mockReset();
  })
  it('loads pokemon names on mounted', async () => {
    const mockPokemonList = {
      count: 1302,
      next: "https://pokeapi.co/api/v2/pokemon?offset=15&limit=15",
      previous: null,
      results: [
          {
              "name": "bulbasaur",
              "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
              "name": "ivysaur",
              "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
              "name": "venusaur",
              "url": "https://pokeapi.co/api/v2/pokemon/3/"
          },
          {
              "name": "charmander",
              "url": "https://pokeapi.co/api/v2/pokemon/4/"
          },
          {
              "name": "charmeleon",
              "url": "https://pokeapi.co/api/v2/pokemon/5/"
          },
          {
              "name": "charizard",
              "url": "https://pokeapi.co/api/v2/pokemon/6/"
          },
          {
              "name": "squirtle",
              "url": "https://pokeapi.co/api/v2/pokemon/7/"
          },
          {
              "name": "wartortle",
              "url": "https://pokeapi.co/api/v2/pokemon/8/"
          },
          {
              "name": "blastoise",
              "url": "https://pokeapi.co/api/v2/pokemon/9/"
          },
          {
              "name": "caterpie",
              "url": "https://pokeapi.co/api/v2/pokemon/10/"
          },
          {
              "name": "metapod",
              "url": "https://pokeapi.co/api/v2/pokemon/11/"
          },
          {
              "name": "butterfree",
              "url": "https://pokeapi.co/api/v2/pokemon/12/"
          },
          {
              "name": "weedle",
              "url": "https://pokeapi.co/api/v2/pokemon/13/"
          },
          {
              "name": "kakuna",
              "url": "https://pokeapi.co/api/v2/pokemon/14/"
          },
          {
              "name": "beedrill",
              "url": "https://pokeapi.co/api/v2/pokemon/15/"
          }
      ]
    };
    
    axios.get.mockResolvedValue({
      data: mockPokemonList,
    })

    const wrapper = mount(APITest)
    await flushPromises();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`);
    
    const pokemonList = wrapper.findAll('[data-test="pokemon"]');
    expect(pokemonList).toHaveLength(15);
    expect(pokemonList[0].text()).toContain('bulbasaur');
  })
})
