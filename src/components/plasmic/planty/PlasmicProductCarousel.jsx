// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ozcq8GxerrF1WYaqjsW34y
// Component: i_CB3Iz86wnVaI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: E6EaS9_QHu4_4J/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: ozcq8GxerrF1WYaqjsW34y/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: i_CB3Iz86wnVaI/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: GWMw1fMvLCyP3Y/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: nwrYEyWGBGkArz/icon

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "slider",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.slider
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__jo0Tg)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zk2D6, {
            [sty.freeBoxslider_second__zk2D6PkSvS]: hasVariant(
              $state,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o6Xn
            )}
          >
            {"Great Design Collection"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qFqXm,
              {
                [sty.textslider_first__qFqXmzn3E7]: hasVariant(
                  $state,
                  "slider",
                  "first"
                ),
                [sty.textslider_second__qFqXMpkSvS]: hasVariant(
                  $state,
                  "slider",
                  "second"
                ),
                [sty.textslider_third__qFqXMaCgYv]: hasVariant(
                  $state,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant($state, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant($state, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jcP8
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zdLvV)}
          >
            <LinkButton
              data-plasmic-name={"linkButton"}
              data-plasmic-override={overrides.linkButton}
              className={classNames("__wab_instance", sty.linkButton)}
              text={"⊕ Add to cart"}
              type={"solidOrange"}
            />
          </p.Stack>
        </p.Stack>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__a6N0Q)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "third")
              ? CircleOIcon
              : hasVariant($state, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg___3H5OP, {
            [sty.svgslider_second___3H5OPpkSvS]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third___3H5OPaCgYv]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__uYRr, {
            [sty.svgslider_first__uYRrZn3E7]: hasVariant(
              $state,
              "slider",
              "first"
            ),
            [sty.svgslider_second__uYRrpkSvS]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__uYRraCgYv]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "third") ? DotCircleOIcon : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__sdXWl, {
            [sty.svgslider_third__sdXWlaCgYv]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductCarousel__ArgProps,
          internalVariantPropNames: PlasmicProductCarousel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */