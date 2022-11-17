import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseStyle, chooseCountry, chooseRegion } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { Url } from 'url';

interface WhiskeyFormProps {
  id?:string;
  data?:{}
}

interface WhiskeyState {
  name: string;
  style: string;
  country: string;
  region: string;
}

export const  WhiskeyForm = (props:WhiskeyFormProps) => {

  const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
  const store = useStore();
  const make = useSelector<WhiskeyState>(state => state.name);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => {
      console.log(props.id)
      // The ! is for strictly typed Typescript stuff
      if(props.id!){
          server_calls.update(props.id!, data);
          console.log(`Updated:${data} ${props.id}`);
          console.log(data);
          setTimeout( () => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          // Dispatch basically updates our state / Redux store
          dispatch(chooseName(data.name));
          dispatch(chooseStyle(data.style));
          dispatch(chooseCountry(data.country));
          dispatch(chooseRegion(data.region));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
  }

  return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Whiskey Name</label>
                <Input {...register('name')} name="name" placeholder='Whiskey Name'/>
            </div>
            <div>
                <label htmlFor="style">Style</label>
                <Input {...register('style')} name="style" placeholder='Style'/>
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <Input {...register('country')} name="country" placeholder='Country'/>
            </div>
            <div>
                <label htmlFor="region">Region</label>
                <Input {...register('region')} name="region" placeholder='Region'/>
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)
}

