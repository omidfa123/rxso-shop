import { Icon } from '@chakra-ui/react';

export const IconDropdown = props => (
  <Icon
    width="3"
    height="5"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.99997 7.85018C4.82075 7.85018 4.64155 7.78175 4.50492 7.64518L0.205141 3.34536C-0.0683804 3.07184 -0.0683804 2.62837 0.205141 2.35496C0.478552 2.08155 0.921933 2.08155 1.19548 2.35496L4.99997 6.15968L8.80449 2.35509C9.07801 2.08168 9.52135 2.08168 9.79474 2.35509C10.0684 2.6285 10.0684 3.07197 9.79474 3.34549L5.49503 7.64531C5.35832 7.78191 5.17913 7.85018 4.99997 7.85018Z"
      fill="#56719B"
    />
  </Icon>
);

export const IconFilter = props => (
  <Icon
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    mt="0.5rem"
  >
    <line
      x1="0.7"
      y1="3.8"
      x2="15.3"
      y2="3.8"
      stroke="#56719B"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="2.7"
      y1="7.8"
      x2="13.3"
      y2="7.8"
      stroke="#56719B"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="4.7"
      y1="11.8"
      x2="11.3"
      y2="11.8"
      stroke="#56719B"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </Icon>
);

export const IconAddCircle = props => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 12.0005C20.5 7.30607 16.6944 3.50049 12 3.50049C7.30558 3.50049 3.5 7.30607 3.5 12.0005C3.5 16.6949 7.30558 20.5005 12 20.5005C16.6944 20.5005 20.5 16.6949 20.5 12.0005ZM22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005Z"
      fill="currentColor"
    />
    <path
      d="M16.9845 11.8896L16.9926 12.0005L16.9826 12.1233C16.9299 12.4431 16.6749 12.6947 16.3534 12.7423L16.2426 12.7505L12.7502 12.7507L12.75 16.2431L12.74 16.3659C12.6873 16.6857 12.4323 16.9373 12.1108 16.985L12 16.9931L11.8771 16.9831C11.5573 16.9304 11.3057 16.6754 11.2581 16.3539L11.25 16.2431L11.2497 12.7507L7.75732 12.7505L7.63447 12.7404C7.31468 12.6877 7.06307 12.4328 7.01546 12.1113L7.00732 12.0005L7.01734 11.8776C7.07003 11.5578 7.32502 11.3062 7.64649 11.2586L7.75732 11.2505L11.2497 11.2502L11.25 7.75781L11.26 7.63496C11.3127 7.31517 11.5677 7.06356 11.8891 7.01594L12 7.00781L12.1228 7.01782C12.4426 7.07052 12.6942 7.32551 12.7418 7.64698L12.75 7.75781L12.7502 11.2502L16.2426 11.2505L16.3655 11.2605C16.6853 11.3132 16.9369 11.5681 16.9845 11.8896Z"
      fill="currentColor"
    />
  </Icon>
);

export const IconDelete = props => (
  <Icon
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00008 0.458252C9.44427 0.458252 10.6245 1.58863 10.7041 3.0129L10.7084 3.16659H15.0834C15.4286 3.16659 15.7084 3.44641 15.7084 3.79159C15.7084 4.108 15.4733 4.36949 15.1682 4.41088L15.0834 4.41659H14.4201L13.3533 15.2659C13.2427 16.3901 12.3321 17.2582 11.2189 17.3286L11.0726 17.3333H4.92752C3.79787 17.3333 2.84479 16.512 2.66577 15.4111L2.64686 15.2659L1.57925 4.41659H0.916748C0.600335 4.41659 0.338839 4.18146 0.297454 3.87639L0.291748 3.79159C0.291748 3.47517 0.526876 3.21368 0.831939 3.17229L0.916748 3.16659H5.29175C5.29175 1.67081 6.50431 0.458252 8.00008 0.458252ZM13.1642 4.41659H2.83508L3.89086 15.1436C3.93981 15.6412 4.33369 16.0285 4.82162 16.0779L4.92752 16.0833H11.0726C11.5727 16.0833 11.9967 15.7292 12.0936 15.2484L12.1093 15.1436L13.1642 4.41659ZM9.45842 6.70825C9.77483 6.70825 10.0363 6.94338 10.0777 7.24844L10.0834 7.33325V13.1666C10.0834 13.5118 9.80359 13.7916 9.45842 13.7916C9.142 13.7916 8.88051 13.5565 8.83912 13.2514L8.83342 13.1666V7.33325C8.83342 6.98807 9.11324 6.70825 9.45842 6.70825ZM6.54175 6.70825C6.85816 6.70825 7.11966 6.94338 7.16104 7.24844L7.16675 7.33325V13.1666C7.16675 13.5118 6.88693 13.7916 6.54175 13.7916C6.22534 13.7916 5.96384 13.5565 5.92245 13.2514L5.91675 13.1666V7.33325C5.91675 6.98807 6.19657 6.70825 6.54175 6.70825ZM8.00008 1.70825C7.23494 1.70825 6.60742 2.29751 6.54658 3.04698L6.54175 3.16659H9.45842C9.45842 2.36117 8.8055 1.70825 8.00008 1.70825Z"
      fill="#ED1F1F"
    />
  </Icon>
);

export const IconPassword = props => (
  <Icon
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      opacity=".35"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" />
      <path
        d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3"
        strokeMiterlimit="10"
      />
    </g>
  </Icon>
);

export const IconeEye = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const IconEyeInvisible = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const IconMenu = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 18H9v-2h12v2Zm0-5H3v-2h18v2Zm0-5H9V6h12v2Z" fill="#F8F8F8" />
  </Icon>
);

export const IconBell = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.792 7.917v3.646a.522.522 0 0 1-.045.21L3.6 14.375h12.802l-1.148-2.602a.522.522 0 0 1-.045-.21V7.917a5.208 5.208 0 1 0-10.416 0Zm2.708 7.5H3.44a.938.938 0 0 1-.858-1.316l1.168-2.648V7.917a6.25 6.25 0 0 1 12.5 0v3.536l1.168 2.648a.937.937 0 0 1-.857 1.316H12.5v.416a2.5 2.5 0 1 1-5 0v-.416Zm3.958 0H8.542v.416a1.458 1.458 0 1 0 2.916 0v-.416Z"
      fill="#F8F8F8"
    />
  </Icon>
);

export const IconLeftArrow = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.793 1.198c.25.24.274.617.069.882l-.069.076L5.704 8l6.09 5.844c.25.24.273.616.068.882l-.069.076a.728.728 0 0 1-.919.065l-.079-.065-6.588-6.323a.657.657 0 0 1-.069-.882l.069-.076 6.588-6.323a.727.727 0 0 1 .998 0Z"
      fill="#fff"
    />
  </Icon>
);

export const IconLeftArrowDouble = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.793 1.198c.25.24.274.617.069.882l-.069.076L5.704 8l6.09 5.844c.25.24.273.616.068.882l-.069.076a.728.728 0 0 1-.919.065l-.079-.065-6.588-6.323a.657.657 0 0 1-.069-.882l.069-.076 6.588-6.323a.727.727 0 0 1 .998 0Z"
      fill="#fff"
    />
    <path
      d="M16.793 1.198c.25.24.274.617.069.882l-.069.076L10.705 8l6.088 5.844c.25.24.274.616.069.882l-.069.076a.728.728 0 0 1-.919.065l-.079-.065-6.588-6.323a.657.657 0 0 1-.069-.882l.069-.076 6.588-6.323a.727.727 0 0 1 .998 0Z"
      fill="#fff"
    />
  </Icon>
);

export const IconRightArrowDouble = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.207 14.802a.657.657 0 0 1-.069-.882l.069-.076L15.295 8 9.207 2.156a.657.657 0 0 1-.069-.882l.069-.076a.728.728 0 0 1 .919-.065l.079.065 6.588 6.323c.25.24.274.617.069.882l-.069.076-6.588 6.323a.727.727 0 0 1-.998 0Z"
      fill="#fff"
    />
    <path
      d="M4.207 14.802a.657.657 0 0 1-.069-.882l.069-.076L10.296 8l-6.09-5.844a.657.657 0 0 1-.068-.882l.069-.076a.728.728 0 0 1 .919-.065l.079.065 6.588 6.323c.25.24.274.617.069.882l-.069.076-6.588 6.323a.727.727 0 0 1-.998 0Z"
      fill="#fff"
    />
  </Icon>
);
export const IconRightArrow = props => (
  <Icon
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.207 14.802a.657.657 0 0 1-.069-.882l.069-.076L10.296 8l-6.09-5.844a.657.657 0 0 1-.068-.882l.069-.076a.728.728 0 0 1 .919-.065l.079.065 6.588 6.323c.25.24.274.617.069.882l-.069.076-6.588 6.323a.727.727 0 0 1-.998 0Z"
      fill="#fff"
    />
  </Icon>
);
export const IconDownArrow = props => (
  <Icon
    visibility={props.visibility}
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.899 3.155a.493.493 0 0 1 .661-.051l.057.051L6 7.722l4.383-4.567a.493.493 0 0 1 .661-.051l.057.051c.18.188.197.482.05.69l-.05.059-4.742 4.94a.493.493 0 0 1-.661.052l-.057-.051L.899 3.904a.545.545 0 0 1 0-.749Z"
      fill="#656565"
    />
  </Icon>
);
