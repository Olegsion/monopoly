import { FC, memo } from 'react'
import style from './Users.module.scss'
import { userDataI, userGameDataI } from '@/store/interfaces/user'
import Image from 'next/image'

interface UserBlockI {
	userData?: userDataI
	userGameData?: userGameDataI
}

const UserBlock: FC<UserBlockI> = props => {
	return (
		<div className={style.user}>
			<div className={style.avatarWrapper}>
				{props.userData?.avatar && props.userGameData && (
					<>
						<Image
							className={style.avatar}
							src={props.userData.avatar}
							alt={'avatar'}
							width={50}
							height={50}
						/>
						<div
							className={style.circle}
							style={{ border: `${props.userGameData.color.hex} solid 2px` }}
						/>
					</>
				)}
			</div>
			<div className={style.info}>
				{props.userData?.name && props.userGameData && (
					<div className={style.nameWithColor}>
						<span className={style.name}>{props.userData.name}</span>|
						<span className={style.color}>
							{props.userGameData.color.title}
						</span>
					</div>
				)}
				{props.userGameData && (
					<>
						<span className={style.money}>{props.userGameData.money}¥</span>
					</>
				)}
			</div>
		</div>
	)
}

export default memo(UserBlock)
