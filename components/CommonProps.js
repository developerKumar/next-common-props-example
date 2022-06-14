import useCommonProps from 'next-common-props/useCommonProps';

export default function CommonProps() {
  const {common} = useCommonProps();
  return(<div className="common-comp"><div>Here are the props decalred in common-props.config.js file</div><div>{JSON.stringify(common)}</div></div>)
}